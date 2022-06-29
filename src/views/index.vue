<template>
 <div>
  <h3>辅助函数mapstate的使用</h3>
  {{$store.state.name}} === {{name}}<br/>
  {{$store.state.age}} === {{newage}}<br/>
  {{$store.state.user.userInfo.skills}}
  <hr>
  <h3>在模块中使用</h3>
  {{$store.state.classobj.class1}} === {{class1}}<br/>
  {{$store.state.classobj.class2}} === {{class2}}
  <hr>
  <h3>在getter中使用</h3>
  <p>商品的总价:{{$store.getters['books/sum']}}</p>
  {{$store.getters.addAge }}==={{addAge}}<br/>
  <!-- 使用其他模块中的getter $store.getters['模块名/方法名'] -->
  {{$store.getters['books/sum']}} ==={{sum}}
  <hr>
  <h3>mapmutations的使用</h3>
  <button @click="editName">点击修改name</button>
   <img :src="$store.state.user.userInfo.logo" alt="" />
    <p>{{ $store.state.user.userInfo.name }}</p>
  <button @click="editlogo">点击修改模块中logo</button>
  <hr>
<h1>mapActions</h1>
<button @click="actionsHandle">index中action的使用</button>
<button @click="actionsUser">其他模块中action的使用</button>
 </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {

    }
  },
  created () {
  },
  computed: {
    ...mapState(['name']),
    ...mapState({ newage: 'age' }),
    // ...mapSatate('模块名',['属性名或方法名'])(其他模块)
    ...mapState('classobj', ['class1']),
    ...mapState('classobj', { class2: 'class1' }),
    ...mapGetters(['addAge']),
    // ...mapGetters('模块名',['属性名或方法名'])(其他模块)
    ...mapGetters('books', ['sum'])
  },
  methods: {
    // ...mapMutations(["方法名"])
    ...mapMutations(['setName']),
    // 使用其他模块中mutations里面的方法要加模块名
    ...mapMutations('user', ['changeLogo']),
    editName () {
      // 直接使用
      // this.$store.commit('setName')
      // 使用辅助函数
      this.setName()
    },
    editlogo () {
      // 直接使用
      // this.$store.commit('user/changeLogo', {
      //   newLogo: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
      //   second: '老三',
      //   uname: 'sam'
      // })
      // 使用辅助函数
      this.changeLogo({
        newLogo: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
        second: '老四',
        uname: 'Ben-10'
      })
    },
    ...mapActions(['aget']),
    actionsHandle () {
      // 直接使用
      // this.$store.dispatch('aget', 1)
      this.aget(2)
    },
    ...mapActions('user', ['aset']),
    actionsUser () {
      // this.$store.dispatch('user/aset', 3)
      this.aset(4)
    }
  }

}
</script>
<style lang='less'  scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
