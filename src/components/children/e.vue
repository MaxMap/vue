// e.vue 中发送事件

<template>
  <div>
    <button @click="additionHandle">+加法器e</button>    
  </div>
</template>

<script>
import {EventBus} from '@/eventBus/eventBus.js'
console.log(EventBus)
export default {
  data(){
    return{
      num:1
    }
  },

  methods:{
    additionHandle(){
      EventBus.$emit('addition', {
        num:this.num++
      })
    }
  }
}
</script>
