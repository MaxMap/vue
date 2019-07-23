<template>
  <div>{{sum}}</div>
</template>
<script>
export default {
  computed: {
    sum(){
          return this.$store.state.sum
      }  
  },
};
</script>
