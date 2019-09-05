var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
// var VueRouter = require('vue-router')
const dsa = () => {
  let ss = 'sszz'
}
dsa.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$router', {
    get() { return Vue }
  })
}
Vue.use(dsa)
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
let ss = new Vue({
  el: '#app',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    message: {
      index: 1,
      mess: ''
    }
  },
  props: {
    name: String
  },
  extends: myMixin,
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
      // console.log(this.message);
    })
    // console.log(this.$router);
  },
})


Vue.extend(myMixin)
Vue.mixin(myMixin)
