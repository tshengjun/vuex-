<template>
  <div class="home">
    <h2>{{msg}}</h2>
    <h5>{{$store.state.counter}}</h5>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
    <h2>传参用法</h2>
    <h5>{{$store.state.counter}}</h5>
    <button @click="addCount(5)">+5</button>
    <button @click="delCount(10)">-10</button>
    <hr>
    <h2>异步用法</h2>
    <h5>{{$store.state.asyncCounter}}</h5>
    <button @click="asyncIncrement">异步+1</button>
    <hr>
    <h2>异步传参</h2>
    <h5>{{$store.state.asyncCounter}}</h5>
    <button @click="asyncAddCount(2)">异步传参</button>
    <hr>
    <h2>异步完成后通知结果</h2>
    <h5>{{$store.state.asyunCounter}}</h5>
    <button @click="aUpDate('异步完成后打印')">获取异步完成</button>
    <hr>
    <h2>getters用法</h2>
    <h5>{{$store.getters.gettersCount}}</h5>
    <hr>
    <h2>调用上一个getters方法</h2>
    <h5>{{$store.getters.gettersCount2}}</h5>
    <hr>
    <h2>getter传参</h2>
    <h5>{{$store.getters.gettersCount3('这是getters传递的参数')}}</h5>
    <hr>
    <hr>
    <h2>这是 modules 的内容</h2>
    <h5>{{$store.state.a.name}}</h5>
    <h2>mutations</h2>
    <h5>{{$store.state.a.name}}</h5>
    <button @click="upDateName">修改</button>
    <h2>acions</h2>
    <h5>{{$store.state.a.name}}</h5>
    <button @click="asyncUpDate('甄姬衡山')">异步传参修改</button>
    <h2>getters</h2>
    <h5>{{$store.getters.fullNmae}}</h5>
    <h2>getters 传参，调用根 store state</h2>
    <h5>{{$store.getters.fullNmae2}}</h5>
    <hr>
    <hr>
    <h2>mapState</h2>
    <h5>{{counter}}</h5>
    <h2>mapGetters</h2>
    <h5>{{gettersCount}}</h5>
    <h2>mapMutations</h2>
    <h5>{{counter}}</h5>
    <button @click="INCREMENT">+1</button>
    <h2>mapActions</h2>
    <h5>{{asyncCounter}}</h5>
    <button @click="AASYNCINCREMENT">异步</button>
    <h2>modules</h2>
    <h5>{{name}}</h5>
    <h5>{{fullNmae}}</h5>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import {
  INCREMENT,
  DECREMENT,
  ADDCOUNT,
  DELCOUNT,
  AASYNCINCREMENT,
  AASYNCADDCOUNT,
  AUPDATE
} from "../store/mutations.type";
export default {
  data() {
    return {
      msg: "基础用法"
    };
  },
  computed: {
    // ...mapState({
      // 等价于 this.counter = this.$store.state.counter
      // 等价于 counter: state => state.counter
      // counter: 'counter'
    // }),
    // 默认映射全局
    ...mapState(['counter', 'asyncCounter']),
    // 访问模块成员  a 模块名称
    ...mapState('a',['name']),
    ...mapGetters('a',['fullNmae']),
    ...mapGetters(['gettersCount'])
  },
  methods: {
    ...mapMutations([INCREMENT]),
    ...mapActions([AASYNCINCREMENT]),
    increment() {
      this.$store.commit(INCREMENT);
    },
    decrement() {
      this.$store.commit(DECREMENT);
    },
    addCount(count) {
      this.$store.commit(ADDCOUNT, count);
    },
    delCount(count) {
      this.$store.commit(DELCOUNT, count);
    },
    asyncIncrement(){
      this.$store.dispatch(AASYNCINCREMENT)
    },
    asyncAddCount(count){
      this.$store.dispatch(AASYNCADDCOUNT,count)
    },
    aUpDate(count){
      this.$store.dispatch(AUPDATE,count).then(res=>{
        console.log(res);
      })
    },
    // -- module 模块内的方法名不要跟 store 中的方法名重复
    upDateName() {
      this.$store.commit('upDateName')
    },
    asyncUpDate(count){
      this.$store.dispatch('asyncUpDate',count)
    }
  }
};
</script>
