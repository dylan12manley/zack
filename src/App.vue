<template>
  <HomePage msg="Muilenburg Contracting"/>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
body { 
  margin: 0; 
  height: 100%;
  color: #FFE4AD;
  background-color: #323031;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
