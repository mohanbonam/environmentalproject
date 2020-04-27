<template>
<div>
  <img :src="about" width="25" />
  <p class="about">You know me.</p>
  <div>
   <router-link to="/archive"> Archive <i class="fas fa-archive fa-xs"></i> | </router-link><router-link to="/">Back <i class="fas fa-arrow-circle-left fa-xs"></i></router-link>
  </div>
</div>
</template>

<script>
export default {
  data (){
    return { 
      about: require('@/assets/alien.png')
    }
  }
}
</script>

<style scoped>

</style>