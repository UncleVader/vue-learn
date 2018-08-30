import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UsersList from '@/views/UsersList'
import EditUserPage from '@/views/Edit'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList
    },
    {
      name: 'edit',
      path: '/edit/:id',
      component: EditUserPage,
      props: true
    }
  ]
})
