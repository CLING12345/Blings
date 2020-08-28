import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'
Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/ask'
  },
  {
    name: 'ask',
    path:'/ask',
    component: () => import('../components/ask'),
    meta: {
      title: '问答'
    }
  },
  {
    name: 'job',
    path:'/jobWanted',
    component: () => import('../components/jobWanted'),
    meta: {
      title: '求职'
    }
  },
  {
    name: 'consultant',
    path:'/consultant',
    component: () => import('../components/consultant'),
    meta: {
      title: '咨询师'
    }
  },
  {
    name: 'me',
    path:'/me',
    component: () => import('../components/me'),
    meta: {
      title: '我的',
      isLogin: true   //用户需要登录才能访问
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../components/login'),
    meta: {
      title: '登录'  
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  mode:'history',
  routes
 });

router.beforeEach((to, from, next) => {
  console.log('进入到路由');
  if(to.path == '/me'){
    store.commit('me');
  }  
  if(to.path == '/ask'){
    store.commit('ask');
  }  
  if(to.path == '/login'){
    store.commit('ask');   
  }  
  if(to.path == '/jobWanted'){
    store.commit('jobWanted');
  }  
  if(to.path == '/consultant'){
    store.commit('consultant');
  }  
  let token = localStorage.getItem('token');
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;  
  }
  if(to.meta.isLogin){   //判断对应路由组件是否需要登录
    if(token){   //判断用户是否登录
      alert('用户已经登录');
      next();
    } else {
      alert('用户没有登录');
      router.push({ path: '/login' });
      store.commit('ask');
    }  
  }else{
    next();
  }
});



export {
  router
};
