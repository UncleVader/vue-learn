<template>
  <b-container id="app">

    <top-nav/>

    <router-view/>

  </b-container>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'top-nav': Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
