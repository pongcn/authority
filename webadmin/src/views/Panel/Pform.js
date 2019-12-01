import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, useRouteMatch, useParams } from 'react-router-dom'
// import { HOST_PATH } from '../../config'


export const Pform = function () {
    // console.log(props.match.path)
    let { url } = useRouteMatch();
    let { id } = useParams();

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