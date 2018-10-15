<template>
  <div id="app">
    <img src="./assets/logo.png">
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src" style="height:60px;">
    </viewer>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      images: [ 'https://piccdn.igetget.com/img/201804/26/201804261404307949184165.png' ]
    }
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
