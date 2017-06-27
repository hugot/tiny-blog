import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Post from '@/components/Post';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/post/:postname',
      name: 'Post',
      component: Post
    }
  ]
})
