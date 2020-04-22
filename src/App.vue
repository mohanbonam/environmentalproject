<template>
  <div id="app">
    <router-view />
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
  /* margin: 100px 0 0; */
  /* font-family: monospace;
  text-align: center;
  display: flex;
  background-color: brown;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  /* display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
