<template>
  <div class="hello">
    <h4>The wilderness holds answers to questions man has not yet learned to ask.</h4>
    <a href="https://www.nature.org/en-us/" target="_blank" rel="noopener" class="instagram">The Nature Conservancy <i class="fas fa-external-link-alt fa-xs"></i></a>
    <!-- <section class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iWWE-WXFQGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section> -->
    <div>
      <!-- <p> Protect the Environment <span class="globe"><i class="fas fa-globe-americas fa-sm"></i></span></p> -->
      <p>follow me</p>
      <a href="https://www.facebook.com/mohanbonam1" target="_blank" rel="noopener" class="instagram"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/always_mohan/" target="_blank" rel="noopener" class="instagram"><i class="fab fa-instagram "></i></a>
      <a href="https://twitter.com/mohanbonam" target="_blank" rel="noopener" class="instagram"><i class="fab fa-twitter"></i></a>
      <a href="https://www.youtube.com/channel/UCc1lktP5ZTEjGO4UGHVXyKQ/featured?view_as=subscriber" target="_blank" rel="noopener" class="instagram"><i class="fab fa-youtube"></i></a>
      <p> With <span class="heart"><i class="fas fa-heart fa-sm"></i></span> Mohan</p>
      <p><router-link to="/about" > about me</router-link></p>
      <p>Date: {{ todayDate }} | Time: {{ todayTime }}</p>
    </div>
    <footer>
      <p>Powered By Purpose</p>
      <small>&copy; Copyright {{currentYear}}</small>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Landing',
  props: {
    msg: String,
    bundle: {
      type: Object,
      default: function () {
        return {
        }
      }
    }
  },
  data () {
    return {
      moment: require('moment'),
    }
  },
  computed: {
    currentYear: () => {
      const y = new Date()
      return y.getFullYear()
    },
    todayTime: () => {
      const time = new Date()
      return time.getHours()+ ":" + time.getMinutes() + ":" + time.getSeconds()
    },
    todayDate: () => {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const today = new Date()
      return `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, h4 {
  /*   */
  color: rgb(150, 150, 150);
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
  color: darkgray;
  text-decoration: none;
  margin: 3px;
}
a:hover {
  color: rgb(94, 94, 94);
}
.heart {
  color: rgb(217, 147, 147);
}
/* .globe {
  color: green;
} */
p{
  font-size: 12px;
  color: darkgray;
}

small {
  color: darkgray;
}

.video {
  margin-top: 25px;
}
</style>
