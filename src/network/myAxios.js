import originAxios from 'axios'
// 创建一个请求者
let instance_one = originAxios.create({
    baseURL: 'http://123.207.32.32:8000/api/v2',
    timeout: 5000
})
// 设置请求拦截( 离家 )
instance_one.interceptors.request.use(config => {return  config })
// 设置响应拦截 ( 回家 )
instance_one.interceptors.response.use(response => {return  response})

let axios = function axios(config) {
    return  instance_one(config)
}
let getHomeMultiple = axios({
    url: '/home/multidata',
})
console.log(getHomeMultiple);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


export {
    axios
}






