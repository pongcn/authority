import React from 'react';
import { login } from '../services';


export const LoginPage = props => {

    const [state, setState] = React.useState({
        email: '',
        password: '',
        submitted: false,
        loading: false,
        error: ''
    });

    const handleChange = async e => {
        let { name, value } = e.target;
        await setState({ ...state, [name]: value });
    }

    const handleSubmit = async e => {
        await e.preventDefault();
        let { email, password } = state;
        // stop here if form is invalid
        await !(email && password)
            ? setState({ ...state, loading: false })
            : setState({ ...state, loading: true });

        await login(email, password)
            .then(state => setState({ ...state, submitted: true }))
            .then(userAuth => {
                // return console.log(this.props.history)
                let { from } = props.location.state || { from: { pathname: "/panel" } };
                props.history.push(from);
            })
            .catch(state => setState({ ...state, loading: false }))
        await console.log({ ...state });
    }

    let { email, password, submitted, loading, error } = EventTarget;

    return (
        <div className="col-md-6 col-md-offset-3">
            <div className="alert alert-info">
                email: test<br />
                Password: test
                </div>
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    <label htmlFor="email">email</label>
                    <input type="text" className="form-control" name="email" value={email} autoComplete="on" onChange={handleChange} />
                    {submitted && !email &&
                        <p className="help-block">email is required</p>
                    }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} autoComplete="on" onChange={handleChange} />
                    {submitted && !password &&
                        <p className="help-block">Password is required</p>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" disabled={loading}>Login</button>
                </div>
                {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                }
            </form>
        </div>
    );

}














// // @withRouter
// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             submitted: false,
//             loading: false,
//             error: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // logout()
//     }

//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         this.setState({ submitted: true });
//         const { email, password } = this.state;

//         // stop here if form is invalid
//         if (!(email && password)) {
//             return;
//         }

//         this.setState({ loading: true });
//         login(email, password)
//             .then(userAuth => {
//                 // return console.log(this.props.history)
//                 const { from } = this.props.location.state || { from: { pathname: "/" } };
//                 this.props.history.push(from);
//             },
//                 error => this.setState({ error, loading: false })
//             );
//     }

//     render() {
//         const { email, password, submitted, loading, error } = this.state;
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <div className="alert alert-info">
//                     email: test<br />
//                     Password: test
//                 </div>
//                 <h2>Login</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
//                         <label htmlFor="email">email</label>
//                         <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
//                         {submitted && !email &&
//                             <div className="help-block">email is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//                         {submitted && !password &&
//                             <div className="help-block">Password is required</div>
//                         }
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary" disabled={loading}>Login</button>
//                         {loading &&
//                             <img src={logo} className="App-logo" alt="logo" />
//                         }
//                     </div>
//                     {error &&
//                         <div className={'alert alert-danger'}>{error}</div>
//                     }
//                 </form>
//             </div>
//         );
//     }
// }

// export { LoginPage }