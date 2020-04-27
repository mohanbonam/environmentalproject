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

p{
  font-size: 13px;
  color: darkgray;
}
a {
  color: darkgray;
  text-decoration: none;
  margin: 3px;
  font-size: 11px;
}
a:hover {
  color: rgb(201, 201, 201);
}

h3, h4 {
  /*   */
  color: rgb(150, 150, 150);
}

hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 0.1px;
    height: 1px;
    background-color: rgb(95, 95, 95);
    border: none;
    margin-top: 15px;
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

}
</style>
