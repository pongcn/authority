// import React from 'react'
// import { Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history'
// import { AuthContext } from '../store'
import { authHeader } from '../helpers';
import { HOST_PATH } from '../config';

// const history = createBrowserHistory();
// const location = history.location;

export const login = async (email, password) => {
    const requestBody = {
        query: `
        query {
            userAuth( email:"${email}", password: "${password}" ){
                user{ _id }
                token
            }
        }
    `
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };

    return fetch(HOST_PATH.API, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userAuth = JSON.stringify(data.data.userAuth)
            // login successful if there's a userAuth in the response
            if (userAuth) {
                localStorage.setItem('userAuth', userAuth);
            }
            return data
        });
}


export const logout = props => {
    localStorage.removeItem('userAuth')
    // history.push('/login')
    // .then(props.location.reload(true))
    // return (
    //     <Link to='/login'>Logout</Link>
    // )

}


export const postAll = async () => {

    const requestBody = {
        query: `
        query {
            users {
                user { 
                    _id
                    email
                }
            }
        }
    `
    };

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(requestBody)
    };

    return fetch(HOST_PATH.API, requestOptions)
        .then(handleResponse);
}

export const handleResponse = async response => {
    return response.text().then(text => {
        // return console.log(typeof(text))
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                localStorage.setItem('userAuth', null);
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


// export default {
//     login,
//     logout,
//     postAll,
//     // AuthContext,
//     // authState,
//     // authReducer,
//     checkAuth,
// };

