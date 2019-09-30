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


const requestBody = { query: `query { products { name productType release } } ` };

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
};

export const Ptable = props => {

    const [state, setState] = React.useState({
        colDatas: [],
        rowDatas: [],
        loading: false,
    })

    const getDate = () => {
        fetch(HOST_PATH.API, requestOptions)
            .then(async response => {
                const text = await response.text();
                const results = text && JSON.parse(text);
                if (!response.ok) {
                    (response.status == 401)
                        ? console.log('401')
                        : Promise.reject((results && results.message) || response.statusText);
                }
                return results.data.products;
            })
            .then(data => dataFormat(data))
    }

    const dataFormat = data => {
        const titles = Object.keys(data[0])
        const colDatas = []
        const rowDatas = []
        for (let index in titles) {
            let colData = {
                title: titles[index].charAt(0).toUpperCase() + titles[index].slice(1),
                dataIndex: titles[index],
            }
            colDatas.push(colData);
        }
        console.log(colDatas[0].title)
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
                    <Divider type="vertical" />
                    {/* <a onClick={() => dispatch({ type: 'action' })}>Invite {record.name}</a>
                    <Divider type="vertical" />
                    <a onClick={() => dispatch({ type: 'del' })}>Delete</a> */}
                </span>
            ),
        })
        for (let index in data) {
            let rowData = data[index];
            rowData.key = index
            // rowData.release.valueOf()
            rowData.release = rowData.release.toString()
            rowDatas.push(rowData);
        }
        console.log(data)
        setState({
            colDatas,
            rowDatas,
            loading: true,
        })
    }

    React.useEffect(() => {
        getDate()
    }, [])

    return (
        <Table
            columns={state.colDatas}
            dataSource={state.rowDatas}
            loading={state.loading}
        />
    )

}