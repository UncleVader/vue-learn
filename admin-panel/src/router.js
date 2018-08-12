import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import UsersList from './components/UsersList'
import UserCard from './components/UserCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'active',
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
      path: '/user/:guid',
      name: 'user',
      component: UserCard,
      props: {
        guid: String
      },
    }
  ]
})
