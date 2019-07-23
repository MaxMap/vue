import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入login 模块
import login from "./login"
export default new Vuex.Store({
    //module属于一个集合 把单一的状态，改为集合的方式
    /*
    * modele中需要注意的是：
    * 每个模块的mution,action是全局方法，但是参数是局部的
    */
    modules: {
        login: login
    },
    //数据源
    state: {
        sum: 0,
        list: [10, 9, 5, 4, 3, 45, 1, 0]
    },
    //唯一方法是提交 mutation
    /*
    * 尽量不要在mutation异步操作，因为在commit上并不会立即执行
    * 那么怎样才能获取到根store 中的state 和 getters 呢？ Vuex 提供了 rootState, rootGetters 
    */
    mutations: {
        addsum(state) {
            state.sum++;
        },
        addsumfive(state) {
            state.sum = state.sum + 5;
        },
        remove(state) {
            state.sum--
        }
    },
    //类似于计算属性 -- computed
    getters: {
        filter: state => {
            return state.list.filter(item => item < 10)
        },
        jobTitle(state) {
            return state.job + "developer"
        }
    },
    //调用 mutation方法， 可以异步操作业务逻辑
    actions: {
        five(textcon) {
            console.log(textcon)
            setTimeout(function () {
                textcon.commit("addsumfive")
            }, 2000)
        }
    }
})