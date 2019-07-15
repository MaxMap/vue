<template>
  <div class="com_a">
    子组件：{{demo}}
    <three-a></three-a>
  </div>
</template>

<script>
import threeA from "@/components/three/three_a.vue";
export default {
  name: "B",
  inject: ["for"],
  data() {
    return {
      demo: this.for
    };
  },
  components: {
    threeA
  }
};
</script>