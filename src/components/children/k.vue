<template>
  <div>
      <button @click="add">+1</button>
      <button @click="remove">-1</button>
      <button @click="addfive">延迟2秒+5</button>
  </div>
</template>
<script>
export default {
  methods: {
      add(){
          this.$store.commit('addsum')
      },
      remove(){
          this.$store.commit('remove')
      },
      addfive(){
          this.$store.dispatch('five')
      }
  },
};
</script>
