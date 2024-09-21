<template>
  <HomePage msg="Muilenburg Contracting"/>
  <AboutUsPage msg="about us page"/>
</template>

<script>
import HomePage from './components/HomePage.vue';
import AboutUsPage from './components/AboutUs.vue';


export default {
  name: 'App',
  components: {
    HomePage,
    AboutUsPage,
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
