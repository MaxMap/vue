<template>
  <div class="border">
    <p>age: {{ age}}</p>
    <p>childCom2: {{ $attrs }}</p>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    age: [String, Number]
  },
  created() {
    console.log(this.$attrs);
    // { "name": "zhang", "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
  methods: {
    startUpRocket() {
      this.$emit("upRocket");
      console.log("startUpRocket");
    }
  }
};
</script>
