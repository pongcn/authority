import React from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { useRouteMatch, useParams } from 'react-router-dom'

// import { HOST_PATH } from '../../config'



const reqBody = {
    product: { query: ` query { products () { _id name productType release } } ` },
    addProduct: { query: ` method { products { _id name productType release } } ` },
}
query: " query { products { _id name productType release } } "


const reqBody2 = [
    { name: 'product', method: 'POST', body: { "query": "query{\n  product(_id:\"5dec3d436d44d92d1c31df73\"){\n   _id\n   name\n   detail\n  }\n}" } },
    { name: 'addProduct', method: 'POST', body: { "query": "mutation {\n  addProduct(name: \"d321232vxhj\", detail: \"232312312\", productType: [\"Wood\", \"Iron\"]){\n    _id\n    name\n    author_ID\n  }\n}\n" } },
    { name: 'blog', method: 'POST', body: '{ query: ` query { products { _id name productType release } } ` }', },
    { name: 'blog', method: 'POST', body: '{ query: ` query { products { _id name productType release } } ` }', },
]



export const Pform = function () {
    // console.log(props.match.path)
    let { url } = useRouteMatch();
    let { id } = useParams();


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



    console.log({ id }, { url })
    return (
        <>
            <h1>it's Pform :</h1>
            <p>{url}</p>
            <p>{id}</p>
            {/* <Route path={`${url}/:id`}><Ptable /></Route> */}

        </>
    )

}





// const reqList = {
//   product: {
//     query: ` 
//       query { product( _id ) { 
//         name 
//         productType 
//         release 
//         } 
//       } 
//     `
//   },
//   products: { query: ` query { products { name productType release } } ` },
//   blogs: { query: ` query { blogs { name author_ID release } } ` },
//   users: { query: ` query { users { email } } ` },
// }
// // pro_del: { mutation: ` mutation{ removeProduct( _id:${_id} ){ type status body } } ` },

// // const PanelPage = {
// //     recomment: String, 
// // }

// // let requestBody = { query: `query { products { name productType release } } ` };

// const fetchHandle = async () => {
//   // let requestBody = reqList.products
//   let requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(reqList.product)
//   };
//   let response = await fetch(HOST_PATH.API, requestOptions)
//   let result = await response.text();
//   if (!response.ok) {
//     response.status === 401
//       ? console.log('401')
//       : Promise.reject(response.statusText)
//   }
//   return result
// }



// export const Pform = porps => {

//   const inMain = async () => {
//     let data = await fetchHandle()
//     console.log(data)
//   }

//   React.useEffect(() => {
//     inMain()
//   }, [])

//   return (
//     <>
//       <h1>it form</h1>
//     </>
//   )
// }

// // ReactDOM.render(<WrappedRegistrationForm />, mountNode);