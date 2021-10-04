import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      state.userName=user.userName
      localStorage.setItem('userName',user.userName)
      localStorage.setItem('Authorization', user.Authorization);
    },
    // del_token(state) {
		// 	state.Authorization = ''
		// 	sessionStorage.removeItem('Authorization')
		// }
  },

//   CLEAR_Auth(state){
//       localStorage.removeItem('Authorization');
//   }
});
 window.sessionStorage.clear()
 
export default store;