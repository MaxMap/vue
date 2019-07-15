<template>
  <div class="com_a">
    子组件d：{{name}}
  </div>
</template>

<script>
// 子组件 A.vue

export default {
  data () {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}

</script>