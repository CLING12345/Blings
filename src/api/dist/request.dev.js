"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import qs from 'qs'
// 创建实例
_axios["default"].defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //创建实例       

var serive = _axios["default"].create({
  // baseURL:'http://api.zhinengshe.com/10001-you163',   //api的baseURL
  baseURL: '',
  // headers: {
  //     apikey: 'f4693e5cf4e543609c5edeb973ffcdc3'
  // },
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000 //请求超时  

}); // 请求拦截


serive.interceptors.request.use(function (config) {
  config.data = JSON.stringify(config.data);

  if (!config.data) {
    config.data = {};
  } //请求前做点什么
  // config.data = qs.stringify(config.data); //数据转化,qs转换
  // if(!config.data){
  //     config.data = {};
  // }
  // 设置公共参数  
  // console.log(qs.stringify(config.data));
  //    const token = localStorage.getItem('item');//这里取token之前，你肯定需要先拿到token,存一下
  //    if(token){
  //       config.params = {'token':token} //如果要求携带在参数中
  //       config.headers.token= token; //如果要求携带在请求头中
  //     }else{
  //         alert('请先登录');
  //     }


  return config;
}, function (error) {
  Promise.reject(error);
}); // 响应拦截

serive.interceptors.response.use(function (response) {
  // console.log(response.data,'返回的数据')  //打印返回的数据
  // let res = response.data
  return response;
}, function (error) {
  console.log('error', +error);
  return Promise.reject(error);
});
var _default = serive;
exports["default"] = _default;