var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

new Vue({
  el: '#app',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    message: 'sss'
  },
  created: function () {
    this.$nextTick(() => {
      console.log('嘻嘻')
    }, { init: "hellowvuew" })

  },




})

