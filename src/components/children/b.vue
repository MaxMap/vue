// 子组件中
<template>
  <div class="com_a">
    <span>{{messageA}}</span>
    <p>获取父组件的值为:  {{parentVal}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageA: 'this is old'
    }
  },
  mounted() {
    console.log(this.$parent)
  },
  computed:{
    parentVal(){
      return this.$parent.msg;
    }
  }
}
</script>