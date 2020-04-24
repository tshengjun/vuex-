
export default {
    namespaced: true,
    state: {
        name: '伽罗太华'
    },
    mutations: {
        upDateName(state){
            state.name = '甄姬衡山'
        }
    },
    actions: {
        asyncUpDate(context,paylode){
            console.log(context);
            console.log(paylode);
            /** 
             * 打印 context 的参数
             * 1. commit
             * 2. dispatch
             * 3. getters 
             * 4. rootGterters 根 srore 的 getters
             * 5. rootState 根 store 的state
             * 6. state 当前 state
            */
            setTimeout(()=>{
                context.commit('upDateName')
            },1000)
        }
    },
    getters: {
        fullNmae(state) {
            return state.name + 111
        },
        fullNmae2(state, getters, rootState){
            return getters.fullNmae + rootState.counter
            // console.log(state);
            // console.log(getters);
            // console.log(rootState);
            
        }
    }
}