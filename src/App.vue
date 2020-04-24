<template>
  <div id="app">
    <div class="ag-hero">
      <router-view />
    </div>
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
  background: url("./assets/wallpaper.gif");
  

}

/* #app .ag-hero {
  background: url("./assets/wallpaper.gif");
  background-size: cover;
  height: 100%;
  margin: 0;
  padding: 0;
} */

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

}
</style>
