import { AASYNCINCREMENT, ASYNCINCREMENT, AASYNCADDCOUNT, ASYNCADDCOUNT, AUPDATE, UPDATE} from './mutations.type'
export default {
    [AASYNCINCREMENT](context){
       setTimeout(()=>{
        context.commit(ASYNCINCREMENT) 
       },1000)
    },
    [AASYNCADDCOUNT](context,payload){
        console.log(45);
        
        setTimeout(()=>{
            context.commit(ASYNCADDCOUNT,payload)
        },1000)
    },
    [AUPDATE](context,payload){
        return new Promise ((resolve)=>{
            setTimeout(()=> {
                context.commit(UPDATE,payload);
                resolve(payload)
            },1000)
        })
    }
}