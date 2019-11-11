import React from 'react';
import { Table, Tag, Divider } from 'antd';
import { HOST_PATH } from '../../config'
// import { initialRes, resReducer } from './store'


// const productType = {
//     Wood,
//     Iron,
//     Hybrids,
//     Wedge,
//     Putter,
//   }

// if api = xxx , else requst xxx 
// xxx.api= { read, del, add, edite }
// const readList = {
//     products: { query: ` query { products { name productType release } } ` },
//     blogs: { query: ` query { blogs { name author_ID release } } ` },
//     users: { query: ` query { users { email } } ` },
// }
// pro_del: { mutation: ` mutation{ removeProduct( _id:${_id} ){ type status body } } ` },



// const PanelPage = {
//     recomment: String, 
// }


const fetchHandle = async () => {
    let requestBody = { query: `query { products { name productType release } } ` };
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    let response = await fetch(HOST_PATH.API, requestOptions)
    let result = await response.text();
    if (!response.ok) {
        response.status === 401
            ? console.log('401')
            : Promise.reject(response.statusText)
    }
    return result
}

const matProduct = async () => {
    let Data = JSON.parse(await fetchHandle()).data.products
    let titles = Object.keys(Data[0])
    let colDatas = []
    let rowDatas = []
    for (let index in titles) {
        let colData = {
            title: titles[index].charAt(0).toUpperCase() + titles[index].slice(1),
            dataIndex: titles[index],
        }
        colDatas.push(colData);
    }
    for (let index in Data) {
        let rowData = Data[index];
        rowData.key = index
        rowData.release = rowData.release.toString()
        rowDatas.push(rowData);
    }

    return { colDatas, rowDatas }
}


export const Precom = props => {

    let [state, setState] = React.useState({
        colDatas: [],
        rowDatas: [],
        loading: true,
    })


    const inTable = async () => {

        let { colDatas, rowDatas } = await matProduct();

        const colHandle = () => {
            colDatas[0].render = text => <a>{text}</a>
            colDatas[1].render = tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        return (<Tag color={color} key={tag}>{tag}</Tag>);
                    })}
                </span>
            )
            colDatas.push({
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span>
                ),
            })
            return colDatas
        }

        setState({
            colDatas: colHandle(),
            rowDatas: rowDatas,
            loading: false,
        })
    }

    React.useEffect(() => {
        inTable()
    }, [])

    return (
        <>
            <Table
                columns={state.colDatas}
                dataSource={state.rowDatas}
                loading={state.loading}
            />
        </>
    )

}