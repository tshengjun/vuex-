export default {
    gettersCount(state){
        return state.gettersCount *= 2
    },
    /**
     * @param {*} state 当前 store 
     * @param {*} getters 可以获取当前 getters 所有方法
     */
    gettersCount2(state,getters){
        return getters.gettersCount > 0 ? true : false
    },
    gettersCount3(state){
        return count => {
            return count + state.counter 
        }
    }
}