import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 需要设置的数据
//要设置的全局访问的state对象
const state={
    active: 'ask'    // 问答路由
    //要设置的初始属性值
};
const getters = {    //监听state中active的变化
    isActive (state){   //方法名随意  主要是来承载变化的active的值
        return state.active;  
    }

};
//改变数据中的变化mutations
const mutations = {
    jobWanted(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.active = 'jobWanted';   //求职路由
    },
    consultant(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.active = 'consultant';   //咨询师路由
    },
    me(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.active = 'me';   //我的路由
    },
    ask(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.active = 'ask';   //我的路由
    }

}



const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;
