import React from 'react';
// import ReactDOM from 'react-dom';/
import { Table } from 'antd';
import { HOST_PATH } from '../../config'


export const Ptable = props => {


    const [state, setState] = React.useState({
        columns: [],
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
                 dataFormat(data.data.products)
            })

    }

    const dataFormat = data => {
        const colName = Object.keys(data[0])
        const columns = []
        const rowDatas = []
        for (let index = 0; index < colName.length; index++) {
            let column = {
                title: colName[index],
                dataIndex: colName[index],
            }
            columns.push(column);
        }
        for (let index = 0; index < data.length; index++) {
            let rowData = data[index];
            let key = 'key'
            rowData[key] = index;
            rowDatas.push(rowData);
        }
        setState({
            columns,
            rowDatas
        })
    }

    React.useEffect(
        () => getDate()
        , [])

    return (
        <Table
            columns={state.columns}
            dataSource={state.rowDatas}
            loading={state.loading}
        />
    )

}