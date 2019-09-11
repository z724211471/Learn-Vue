var apiURL='https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
// var VueRouter = require('vue-router')
const dsa=() => {
  let ss='sszz'
}
dsa.install=function (Vue) {
  Object.defineProperty(Vue.prototype, '$router', {
    get() { return Vue }
  })
}
let coms=Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
console.log(Vue.component)
Vue.use(dsa)
var myMixin={
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
let ss=new Vue({
  el: '#app',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    lists: [],
    message: {
      index: 1,
      mess: ''
    },
    total: 100000,
  },
  props: {
    name: String
  },
  extends: myMixin,
  components: {
    'button-counter': coms
  },
  watch: {
    'message.index': {
      handler: function (val, newval) {
        // console.log(val,newval)
      },
      before: function (data) {
        // console.log(data)
        // console.log(this)
      },
      deep: true
    }
  },
  created: function () {
    this.$nextTick(() => {
      console.log(this);
    })
    this.loop(this.total, 0);
    // console.log(this.$router);
  },
  methods: {
  },

})


Vue.extend(myMixin)
Vue.mixin(myMixin)
