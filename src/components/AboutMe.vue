<template>
<div>
  <img :src="about" width="25" />
  <p class="about">You know me.</p>
  <div>
  <router-link to="/">Back <i class="fas fa-arrow-circle-left fa-xs"></i></router-link>
  </div>
</div>
</template>

<script>
export default {
  data (){
    return { 
      // elsa: require('@/assets/elsa.png'),
      about: require('@/assets/alien.png')

    }
  }
}
</script>

<style scoped>
/* img {
  border: 2px solid red;
  border-radius: 50%;
} */
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
  color: rgb(94, 94, 94);
}
</style>