<template>
  <b-container id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Head/>
    <Search/>
    <Display/>
  </b-container>
</template>

<script>
import Search from './components/search.vue'
import Display from './components/display.vue'
import Head from './components/Head.vue'

//app.vue altında komponentleri tanımla
//eğer router varsa router'ın altında tanımla
//router'ı da app.vue altında tanımla
//uygulama küçük olduğu için şimdilik burada tanımlıyoruz
export default {
  name: 'App',
  components: {
    Search,
    Display,
    Head
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
