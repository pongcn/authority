import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { HOST_PATH } from '../../config'

const productType = {
    Wood,
    Iron,
    Hybrids,
    Wedge,
    Putter,
  }
  

export const Ptable = props => {


    const [state, setState] = React.useState({
        colDatas: [],
        rowDatas: [],
        loading: false,
    })

    const getDate = () => {

        const requestBody = {
            query: `
                query{
                    products{
                    name
                    productType
                    release
                    }
                }
            `
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        };

        fetch(HOST_PATH.API, requestOptions)
            .then(async response => {
                setState({ loading: true })
                const text = await response.text();
                // return console.log(typeof(text))
                const results = await text && JSON.parse(text);
                if (!response.ok) {
                    (response.status === 401)
                        // auto logout if 401 response returned from api
                        ? console.log('401')
                        : Promise.reject((results && results.message) || response.statusText);
                }
                return results;
            })
            .then(data => {

                formatData(data.data.products)

            })

    }

    const formatData = data => {
        const titles = Object.keys(data[0])
        const colDatas = []
        for (let i = 0; i < titles.length; i++) {
            let colData = {
                title: titles[i].charAt(0).toUpperCase() + titles[i].slice(1),
                dataIndex: titles[i],
            }
            colDatas.push(colData);
        }
        colDatas[0].render = text => <a>{text}</a>
        // colDatas[1].render = tags => (
        //     <span>
        //         {tags.map(tag => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </span>
        // )
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
        const rowDatas = []
        const key = 'key'
        for (let i = 0; i < data.length; i++) {
            let rowData = data[i];
            rowData[key] = i;
            rowDatas.push(rowData);
        }
        console.log(colDatas, rowDatas)
        setState({
            colDatas,
            rowDatas
        })
    }

    React.useEffect(
        () => getDate()
        , [])

    return (
        <Table
            columns={state.colDatas}
            dataSource={state.rowDatas}
            loading={state.loading}
        />
    )

}