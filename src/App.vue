<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: monospace;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: rgb(49, 49, 49);
}
</style>
