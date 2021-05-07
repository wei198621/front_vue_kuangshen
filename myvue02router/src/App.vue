<template>
  <div id="app">
    <h1>Gousheng study Kuangshen</h1>
    <router-link to="/main" >首页</router-link>
    <router-link to="/content01">内容页</router-link>
    <!--router-view  显示router 指向组件的真实内容-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
