// function authToken() {
//     window.addEventListener('storage', (e) => {
//         if (e.key === 'user') {
//             global.authToken = true
//         } else {
//             global.authToken = false
//         }
//         console.log(global.authToken)
//         // console.log('The ' + e.key +
//         //     ' key has been changed from ' + e.oldValue +
//         //     ' to ' + e.newValue + '.');
//         // let listentoken = window.localStorage.getItem('user')
//         // if (e.key == null) {
//         //     console.log("unauth")
//         // } else {
//         //     return console.log("authed")
//         // }
//         // console.log(JSON.parse(window.localStorage.getItem('user')));
//     });
// }


  // auth = observable(false);
  // authToken() {
  //   // userService.authToken
  //   let authToken = userService.auth
  //   this.setState({ auth: authToken })
  // }
  // componentDidMount() {
  //   this.authToken()
  // }




// const authState = { token: null };

// function authReducer(state, action) {
//     switch (action.type) {
//         case 'unAuth':
//             return { token: true };
//         case 'authed':
//             return { token: false };
//         default:
//             throw new Error();
//     }
// }

// import { configureFakeBackend } from './helpers';
// configureFakeBackend();

// function logStorageChange(changes, area) {
//     console.log("Change in storage area: " + area);

//     var changedItems = Object.keys(changes);

//     for (var item of changedItems) {
//         console.log(item + " has changed:");
//         console.log("Old value: ");
//         console.log(changes[item].oldValue);
//         console.log("New value: ");
//         console.log(changes[item].newValue);
//     }
// }

// brower.storage.onChanged.addListener(logStorageChange)



// populateStorage()

// function populateStorage() {
//     // localStorage.setItem('usertoken1', { usertoken1:'safjskal' });

//     if (localStorage.getItem('user') == null) {
//         console.log("unauth")
//     } else {
//         console.log("authed")
//     }
// }

// var originalSetItem = localStorage.setItem;

// localStorage.setItem = function () {
//     var event = new Event('itemInserted');
//     document.dispatchEvent(event);

//     originalSetItem.apply(this, arguments);
// }

// var storageHandler = function (e) {
//     console.log('storage event 1');
// };

// document.addEventListener("itemInserted", storageHandler, false);

// localStorage.setItem('foo', 'bar'); // Pops an alert

// window.onstorage = () => {
//     // When local storage changes, dump the list to
//     // the console.
//     console.log(window.localStorage.getItem('user'));    
//   };

// function populateStorage() {
//     // localStorage.setItem('usertoken1', { usertoken1:'safjskal' });

//     if (localStorage.getItem('user') == null) {
//         console.log("unauth")
//     } else {
//         console.log("authed")
//     }
// }
// populateStorage()




// window.onstorage = function (e) {
//     console.log('The ' + e.key +
//         ' key has been changed from ' + e.oldValue +
//         ' to ' + e.newValue + '.');
// };



// window.addEventListener('storage', (e) => {
//     localStorage.onchange = handleChange
//     // if (e.key === 'user') {
//     //     global.authToken = true
//     // } else {
//     //     global.authToken = false
//     // }
//     // console.log(global.authToken)
// })

 // class App extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       // authUser: false,
  //       // contex
  //     }
  //   }
  //   checkAuth() {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     if (user) {
  //       return this.setState({
  //         ...this.state, authUser: true
  //       });
  //     }
  //     return this.setState({
  //       ...this.state, authUser: false
  //     });
  //   }
  //   componentDidMount() {
  //     this.checkAuth()
  //   }
  //   render() {

  // React.useEffect(() => {
  //   userService.checkAuth()
  // })