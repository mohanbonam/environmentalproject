<template>
  <div class="hello">
    <h3>The wilderness holds answers to questions man has not yet learned to ask.</h3>
    <div>
      <p> Protect the Environment <span class="globe"><i class="fas fa-globe-americas fa-sm"></i></span></p>
      <p>catch me at</p>
      <a href="https://www.instagram.com/always_mohan/" target="_blank" rel="noopener" class="instagram"><i class="fab fa-instagram "></i></a>
      <P> With <span class="heart"><i class="fas fa-heart fa-sm"></i></span> by Mohan</p>
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
h3, h4 {
  /*   */
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
