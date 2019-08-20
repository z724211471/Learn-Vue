var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
// var VueRouter = require('vue-router')
const dsa=()=>{
  let ss='sszz'
  console.log('你执行了吗')
}
dsa.install=function(Vue){
  Object.defineProperty(Vue.prototype, '$router', {
    get() { return Vue }
  })
}
Vue.use(dsa)
let ss=new Vue({
  el: '#app',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    message: 'sss'
  },
  created: function () {
    this.$nextTick(() => {
      console.log(this.message);
      console.log('嘻嘻')
    })
    console.log(this.$router);
  },
})

