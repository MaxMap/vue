// f.vue 中接收事件

<template>
  <div>计算和f: {{count}}</div>
</template>

<script>
import {EventBus} from '@/eventBus/eventBus.js'
export default {
  data() {
    return {
      count: 0
    }
  },

  mounted() {
    EventBus.$on('addition', param => {
      this.count = this.count + param.num;
    })
  }
}
</script>
