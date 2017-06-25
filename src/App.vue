<template>
  <div id="app">
    <header><h1>{{ title }}</h1></header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {title: '$~Welcome_'}
  }
}
</script>

<style scoped>
#app {
  height: 550px;
  width: 1000px;
  background-color: white;
  margin: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px black;
}

#app header {
  margin: 0;
  background-color: black;
  color: white;
  width: 100%;
  display: table;
  height: 80px;
  text-align: center;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
</style>
