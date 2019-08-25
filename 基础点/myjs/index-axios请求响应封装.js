import axios from "axios" ;
import { Loading } from 'element-ui';
import qs from "qs"
axios.defaults.baseURL = "http://59.110.138.169"
axios.defaults.timeout = 5000;
var loadings ;
// request 是请求服务器执行的拦截函数
axios.interceptors.request.use(function (config) {
    console.log(config,333)
    if(config.method == "post"){
        config.data = qs.stringify(config.data)
    }
    loadings =  Loading.service();
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});


//response 响应浏览器拦截器
axios.interceptors.response.use(function (config) {
    loadings.close();
    return config;
}, function (error) {
    loadings.close();
    return Promise.reject(error);
});
export default axios 