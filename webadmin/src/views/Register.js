import React, { Component } from 'react'
// import AuthContext from '../context/auth-context'

import './Auth.css'

class AuthPage extends Component {

    submitHandler = event => {
        event.preventDefault();
        let email = this.emailEl.current.value;
        let password = this.passwordEl.current.value;
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        };

        let requestBody = {
            query: `
            query {
                signIn( email:"${email}", password: "${password}" ){
                    user{
                      _id
                    }
                    token
                }
            }
        `
        };

        if (!this.state.isLogin) {
            requestBody = {
                query: `
            mutation {
                addUser( email:"${email}", password: "${password}" ){
                    _id
                }
            }
        `
            }
        };

        fetch('http://localhost:4001/gql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed')
            }
            return res.json();
        }).then(resData => {
            console.log(resData)
        }).catch(err => {
            console.log(err)
        });

    };


    render() {
        return (
            <form className="auth-form" onSubmit={this.submitHandler}>
                <div className="form-control">
                    <label htmlFor="email">Emai</label>
                    <input type="email" ref={this.emailEl} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" ref={this.passwordEl} />
                </div>
                <div className="form-actions">
                    <button type="submit">submit</button>
                    <button type="button" onClick={this.switchModeHandler}>
                        Switch to {this.state.isLogin ? 'Sigup' : 'Login'}
                    </button>
                </div>
            </form>
        )
    }



}