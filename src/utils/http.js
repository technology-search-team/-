import axios from 'axios'
import router from '../router'
// import { message } from '@/utils/index';


const http = axios.create({
  timeout: 1000 * 120,
  withCredentials: true,

})

/**
 * 请求拦截
 */
// http.interceptors.request.use(config => {
//   // if (sessionStorage.getItem('token')) {
//   //     config.headers.Authorization = sessionStorage.getItem('token');
//   // }
//   let token = localStorage.getItem('Authorization')
//   let userName=localStorage.getItem('userName')
//   if (token,userName) {
//     config.headers['Authorization'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
//     config.headers['userName'] = userName
//   }
//   return config;
// }, error => {
//   return Promise.reject(error)
// })


/**
 * 响应拦截
 */
// http.interceptors.response.use(response => {
//   const res=response.data
//   if(response.headers.token){
//   
//     // store.dispatch('user/updateToken',{ token:response.headers.token})
//   }
//   if(res.code !== 20000){
//     if(res.code===50014){
//       console.log(1);
//       alert("token过期请重新登录")
//       router.replace({
//         path:'/'
//       })
//     }
//     if(res.code===9999){
//       alert(res.msg)
//     }
//     return Promise.reject(res)
//   }else{
//     return res
//   }
//   // if (response.status == 200) {
//   //   if(response.data.code==9999){
//   //     alert('token过期')
//   //     router.replace({
//   //       path:'/'
//   //     })
//   //     this.$router.push('/')
//   //   }else{
//   //     return res
//   //   }
//   // }

// }, error => {
//   // message({
//   //   type: "error",
//   //   message:  error.message,
//   //   duration: 1000
//   // })
//   return Promise.reject(error)
// })


/*
post请求json数据
*/
http.postJson=(url,data={})=>{
    return http({
        url:url,
        cache:false,
        headers:{
            'Content-Type':'application/json'
        },
        method:'post',
        data:JSON.stringify(data)
    })
}
/*
post
*/
http.post=(url,data={})=>{
    return http({
        url:url,
        method:'post',
        data:data
    })
}

/**
 * get请求
 */
 http.get = (url, data = {}) => {
    return http({
      url: url,
      cache: false,
      method: "get",
      params: data
    })
  }

export default http