<template>
  <div id="app">
    <topbar></topbar>
    <router-view/>
  </div>
</template>

<script>
import TopbarVue from './components/Topbar.vue'
export default {
  name: 'App',
  components: {
    'topbar': TopbarVue
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
