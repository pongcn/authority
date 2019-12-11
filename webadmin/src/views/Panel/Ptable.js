import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'
import { Table } from 'antd';
import { HOST_PATH } from '../../config'
import { Pform } from '../Panel'
// import { func } from 'prop-types';
// import { initialRes, resReducer } from './store'


// const productType = {
//     Wood,
//     Iron,
//     Hybrids,      
//     Wedge,
//     Putter,
//   }



const reqBody = {
    products: { query: ` query { products { _id name productType release } } ` },
    blogs: { query: ` query { blogs { _id name release } } ` },
    users: { query: ` query { users { _id email } } ` },
    a:{"query":"{\n  products {\n    _id\n    name\n    productType\n    release\n  }\n}\n"}
}

// {"query":" query { products { _id name productType release } } "}

export const Ptable = function () {

    let { url } = useRouteMatch();
    let { id } = useParams();
    console.log(url)

    let [state, setState] = React.useState({
        colDatas: [],
        rowDatas: [],
        loading: true,
    })

    // const getId = function () {
    //     console.log('here it is ', Object.keys(this))
    // }
    // getId.call(reqBody)
    console.log(JSON.stringify(reqBody[id]))

    const fetchHandle = async () => {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody[id])
        };
        let response = await fetch(HOST_PATH.API, requestOptions)
        let result = await response.text();
        if (!response.ok) {
            response.status === 401
                ? console.log('401')
                : Promise.reject(response.statusText)
        }
        console.log(JSON.parse(result).data[id])
        return JSON.parse(result).data[id]
    }

    const forTable = async () => {
        let Data = await fetchHandle()
        let titles = Object.keys(Data[0])
        let colDatas = []
        let rowDatas = []
        console.log(titles)
        for (let i in titles) {
            let colData = {
                title: titles[i].charAt(0).toUpperCase() + titles[i].slice(1),
                dataIndex: titles[i],
            }
            colDatas.push(colData);
        }
        for (let i in Data) {
            let rowData = Data[i];
            rowData.key = i
            // rowData.release = rowData.release.toString()
            rowDatas.push(rowData);
        }
        return { colDatas, rowDatas }
    }

    const inTable = async () => {
        let { colDatas, rowDatas } = await forTable();
        colDatas[0].render = text => <a>{text}</a>
        colDatas.push({
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Link to={`${url}/form@=${record._id}`}  >{record.name}</Link>
                </span>
            ),
        })
        return { colDatas, rowDatas }
    }


    React.useEffect(() => {
        inTable().then(({ colDatas, rowDatas }) => setState({
            colDatas: colDatas,
            rowDatas: rowDatas,
            loading: false,
        }))
    }, [id])

    return (
        <Router>
            <Table
                columns={state.colDatas}
                dataSource={state.rowDatas}
                loading={state.loading}
            />
            <Switch>
                <Route path={`${url}/form@=:id`}><Pform /></Route>
            </Switch>
        </Router>
    )

}