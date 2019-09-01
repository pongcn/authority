export function authHeader() {
    // return authorization header with basic auth credentials
    let authuser = JSON.parse(localStorage.getItem('authuser'));

    if (authuser) {
        return { 'Authorization': 'Basic ' + authuser };
    } else {
        return {};
    }
}