const state = {
    useName: "sam"
};
const mutations = {
    // actions 中的context参数对象多了 rootState 参数
    changeName({ commit, rootState }, anotherName) {
        if (rootState.job == "web") {
            commit("change_name", anotherName)
        }
    }
};
const actions = {
    // getters 获取到 rootState, rootGetters 作为参数。
  // rootState和 rootGetter参数顺序不要写反，一定是state在前，getter在后面，这是vuex的默认参数传递顺序， 可以打印出来看一下。
    changeName({ commit }, anotherName) {
        commit("change_name", anotherName)
    }
};
const getters = {
    localJobTitle (state,getters,rootState,rootGetters) { 
        console.log(rootState);
        console.log(rootGetters);
        return rootGetters.jobTitle + " aka " + rootState.job 
      }
};

// 不要忘记把state, mutations等暴露出去。
export default {
    state,
    mutations,
    actions,
    getters
}