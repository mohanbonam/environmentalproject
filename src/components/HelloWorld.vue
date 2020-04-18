<template>
  <div class="hello">
    <h3>catch me at..</h3>
    <ul>
      <a href="https://www.instagram.com/always_mohan/" target="_blank" rel="noopener" class="instagram"><i class="fab fa-instagram fa-lg"></i></a>
    </ul>
    <div>
      <p> Protect the Environment <span class="globe"><i class="fas fa-globe-americas"></i></span></p>
      <!-- <img :src="planet" width="300" height="300" /> -->
      <P> With <span class="heart"><i class="fas fa-heart"></i></span> by Mohan. </p>
      <p>Date: {{ todayDate }} | Time: {{ todayTime }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    bundle: {
      type: Object,
      default: function () {
        return {}
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
  // var vue_det = new Vue({
  //           el: '#intro',
  //           data: {
  //              timestamp: ""
  //           },
  //           created() {
  //               setInterval(this.getNow, 1000);
  //           },
  //           methods: {
  //               getNow: function() {
  //                   const today = new Date();
  //                   const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //                   const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //                   const dateTime = date +' '+ time;
  //                   this.timestamp = dateTime;
  //               }
  //           }
  //        });
  computed: {
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
.heart {
  color: rgb(187, 76, 76);
}
.globe {
  color: green;
}
p{
  font-size: 12px;
  color: darkgray;
}
</style>
