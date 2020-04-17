<template>
  <div class="hello">
    <!-- <h1 style="border-bottom: 1px solid">{{ msg }}</h1> -->
    <h3>catch me at..</h3>
    <ul>
      <a href="https://www.instagram.com/always_mohan/" target="_blank" rel="noopener" class="instagram"><i class="fab fa-instagram fa-lg"></i></a>
    </ul>
    <P> With <span class="icon"><i class="fas fa-heart"></i></span> by Mohan. </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 100px 0 0;
  color: rgb(117, 117, 117);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #a06565;
  text-decoration: none;
}
.icon {
  color: rgb(187, 76, 76);
}
p{
  font-size: 14px;
  color: darkgray;
}
</style>
