import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeA from '@/components/children/a'
import HomeB from '@/components/children/b'
import HomeC from '@/components/children/c'
import HomeD from '@/components/children/d'
import ThreeA from '@/components/three/three_a'
import ThreeB from '@/components/three/three_b'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a',
      component: HomeA,
      children:[
        {
          path: '/a/three_a',
          name: 'three_a',
          component: ThreeA
        },
        {
          path: '/a/three_b',
          name: 'three_b',
          component: ThreeB
        },
      ]
    },
    {
      path: '/b',
      name: 'b',
      component: HomeB
    },
    {
      path: '/c',
      name: 'c',
      component: HomeC
    },
    {
      path: '/d',
      name: 'd',
      component: HomeD
    },
  ]
})
