import { INCREMENT, DECREMENT, ADDCOUNT, DELCOUNT, ASYNCINCREMENT, ASYNCADDCOUNT, UPDATE } from './mutations.type'
export default {
    [INCREMENT](state) {
        state.counter += 1
    },
    [DECREMENT](state) {
        state.counter -= 1
    },
    [ADDCOUNT](state, stu) {
        state.counter += stu
    },
    [DELCOUNT](state, stu) {
        state.counter -= stu
    },
    [ASYNCINCREMENT](state) {
        state.asyncCounter += 1
    },
    [ASYNCADDCOUNT](state, stu) {
        state.asyncCounter += stu
    },
    [UPDATE](state,stu){
        console.log(stu);
        
        state.asyncCounter = stu
    }
}