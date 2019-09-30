import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		status: null,
		token: null,
		user: null,
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, payload) {
			state.status = 'success'
			state.token = payload.token
			state.user = payload.user
		},
		auth_false(state) {
			state.status = 'false'
			state.token = null
			state.user = null
		},
	},
	actions: {
		async authCheck({ commit }) {
			let data = JSON.parse(localStorage.getItem("userAuth"))
			data
				? function () {
					let token = data.token
					let user = data.user._id
					commit('auth_success', { token, user })
				}()
				: commit('auth_false')
		},
		async login({ commit }, { email, password }) {
			const reqBody = {
				query: `
				query {
					userAuth( email:"${email}", password: "${password}" ){
						user { 
							_id
							email
						 }
						token
					}
				}
			`
			};

			return new Promise((resolve, reject) => {
				// return console.log(email, password);
				commit('auth_request')
				axios({
					url: 'http://localhost:4001/gql',
					data: reqBody,
					method: 'POST'
				})
					.then(res => {
						const data = res.data.data.userAuth
						const token = data.token
						const user = data.user._id
						// // Add the following line:
						// // axios.defaults.headers.common['Authorization'] = token
						resolve(
							localStorage.setItem('userAuth', JSON.stringify(data)),
							commit('auth_success', { token, user }),
							// console.log(token, user)
						)
					}).catch(err => {
						localStorage.removeItem('userAuth');
						commit('auth_false');
						reject(err)
					})
			})
		},
		// register({ commit }, userId) {
		// 	return new Promise((resolve, reject) => {
		// 		commit('auth_request')
		// 		axios({
		// 			url: 'http://localhost:3000/register',
		// 			data: requestBody,
		// 			method: 'POST'
		// 		})
		// 			.then(res => {
		// 				const token = res.data.user.token
		// 				const userId = res.data.user.userId
		// 				localStorage.setItem('token', token)
		// 				// Add the following line:
		// 				axios.defaults.headers.common['Authorization'] = token
		// 				commit('auth_success', token, userId)
		// 				resolve(res)
		// 			})
		// 			.catch(err => {
		// 				commit('auth_error', err)
		// 				localStorage.removeItem('token')
		// 				reject(err)
		// 			})
		// 	})
		// },
		async logout({ commit }) {
			localStorage.removeItem('userAuth')
			return commit('auth_false')
			// delete axios.defaults.headers.common['Authorization']
		}
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
})


export default store