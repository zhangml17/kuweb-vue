import Vue from 'vue'
import Router from 'vue-router'

import kuweb from '@/components/web-ui'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/kuweb',
      name: 'kuweb',
      component: kuweb
    }
  ]
})
