import React from 'react'


export const authReducer = (state, action) => {
    let payload = console.log(action.type)
    switch (action.type) {
        case 'auth_checking':
            return { ...state, auth: null, payload }
        case 'auth_success':
            return { ...state, auth: true, payload }
        case 'auth_error':
            return { ...state, auth: false, payload }
        case 'logout':
            return { ...state, auth: null, payload }
        default:
            return state
    }
};


export const AuthContext = React.createContext()

export const AuthProvider = props => {
    const [state, dispath] = React.useReducer(authReducer, { auth: false })
    window.addEventListener("load", () => dispath({ type: 'auth_checking' }))
    return (
        <AuthContext.Provider value={{ state, dispath }}>
            {
                localStorage.getItem("userAuth")
                    ? window.addEventListener("load", () => dispath({ type: 'auth_success' }))
                    : window.addEventListener("load", () => dispath({ type: 'auth_error' }))
            }
            {props.children}
        </AuthContext.Provider>
    )
}




