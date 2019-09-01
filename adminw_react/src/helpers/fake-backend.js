export function configureFakeBackend() {
    let users = [{ _id: '65fda321dfsFSdsd%1sf', email: 'test@test.test', password: 'test', token: 'tokenjwtsecret' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/gql') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are val_id return user details
                        let user = filteredUsers[0];
                        let responseJson = {
                            _id: user._id,
                            email: user.email,
                            token: user.token
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('email or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/gql') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if val_id, this security 
                    // is implemented server s_ide in a real application
                    if (opts.headers && opts.headers.Authorization === `Basic ${window.btoa('test:test')}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or inval_id
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}