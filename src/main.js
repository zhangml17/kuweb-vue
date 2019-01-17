// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Home from './Home'
import router from './router'
// import Kuweb from './components/web-ui'
// import ProgressBar from './components/progress-bar'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 // components: { App,kuweb },
  components: { Home },
 // template: '<kuweb/>',
  template: '<Home/>'
})
