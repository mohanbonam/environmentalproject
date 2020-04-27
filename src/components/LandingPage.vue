<template>
  <div class="hello">
    <h4>The wilderness holds answers to questions man has not yet learned to ask.</h4>
    <a href="https://www.nature.org/en-us/" target="_blank" rel="noopener" class="instagram">The Nature Conservancy <i class="fas fa-external-link-square-alt fa-xs"></i></a>
    <hr>
    <div>
      <p>follow me</p>
      <a href="https://www.facebook.com/mohanbonam1" target="_blank" rel="noopener" class="instagram"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/always_mohan/" target="_blank" rel="noopener" class="instagram"><i class="fab fa-instagram "></i></a>
      <a href="https://twitter.com/mohanbonam" target="_blank" rel="noopener" class="instagram"><i class="fab fa-twitter"></i></a>
      <a href="https://www.youtube.com/channel/UCc1lktP5ZTEjGO4UGHVXyKQ/featured?view_as=subscriber" target="_blank" rel="noopener" class="instagram"><i class="fab fa-youtube"></i></a>
      <P> With <span class="heart"><i class="animated infinite heartBeat delay-1s fas fa-heart fa-xs"></i></span> Mohan</p>
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
      // planet: require('@/assets/protect.png')
      moment: require('moment'),
      // todayTime: String
      // todayDate: String
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
      const today = new Date()
      return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
    }
  },
  // watch: {
  //   bundle () {
  //     const time = new Date()
  //     this.todayTime = time.getHours()+ ":" + time.getMinutes() + ":" + time.getSeconds()
  //   }
  // },
  // watch: {
  //   bundle () {
  //     const today = new Date()
  //     this.todayDate = (today.getMonth() + 1) + ' / ' + today.getDate() + ' / ' + today.getFullYear()
  //   }
  // },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */

.heart {
  color: rgb(167, 76, 76)
}

small {
  color: darkgray;
}

</style>
