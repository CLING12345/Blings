"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '*',
  redirect: '/ask'
}, {
  name: 'ask',
  path: '/ask',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/ask'));
    });
  },
  meta: {
    title: '问答'
  }
}, {
  name: 'job',
  path: '/jobWanted',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/jobWanted'));
    });
  },
  meta: {
    title: '求职'
  }
}, {
  name: 'consultant',
  path: '/consultant',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/consultant'));
    });
  },
  meta: {
    title: '咨询师'
  }
}, {
  name: 'me',
  path: '/me',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/me'));
    });
  },
  meta: {
    title: '我的',
    isLogin: true //用户需要登录才能访问

  }
}, {
  name: 'login',
  path: '/login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/login'));
    });
  },
  meta: {
    title: '登录'
  }
}]; // add route path

routes.forEach(function (route) {
  route.path = route.path || '/' + (route.name || '');
});
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: routes
});
exports.router = router;
router.beforeEach(function (to, from, next) {
  console.log('进入到路由');

  if (to.path == '/me') {
    _store["default"].commit('me');
  }

  if (to.path == '/ask') {
    _store["default"].commit('ask');
  }

  if (to.path == '/login') {
    _store["default"].commit('ask');
  }

  if (to.path == '/jobWanted') {
    _store["default"].commit('jobWanted');
  }

  if (to.path == '/consultant') {
    _store["default"].commit('consultant');
  }

  var token = localStorage.getItem('token');
  var title = to.meta && to.meta.title;

  if (title) {
    document.title = title;
  }

  if (to.meta.isLogin) {
    //判断对应路由组件是否需要登录
    if (token) {
      //判断用户是否登录
      alert('用户已经登录');
      next();
    } else {
      alert('用户没有登录');
      router.push({
        path: '/login'
      });

      _store["default"].commit('ask');
    }
  } else {
    next();
  }
});