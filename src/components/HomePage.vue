<template>
  <div class="home">
    <span>Zack Muilenburg Contracting</span>
    <img src='@/assets/images/selfie.png' alt='dylan selfie'/>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    height: 100%;
  }
</style>
