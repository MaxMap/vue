<template class="border">
  <div>
    <p>name: {{ name}}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <h v-bind="$attrs"  v-on="$listeners"></h>
  </div>
</template>
<script>
// import h from "@/components/children/h";
const h = () => import("./h.vue");
export default {
  components: {
    h
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性 组件的属性没有
  props: {
    name: String // name作为props属性绑定
  },
  created() {
    console.log('this.$listeners',this.$listeners)
    console.log(this.$attrs);
     // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  }
};
</script>
