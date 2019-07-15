<template>
  <div>
    <p v-for="(item, index) in articles" :key="index" @click="emitIndex(index+1)">{{item}}</p>
    <div>
        <p>个人信息</p>
        <p>姓名：{{servers.name}}</p>
        <p>年龄：{{servers.age}}</p>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
    /*
    * props支持类型：
    * String
    * Number
    * Object
    * Boolean
    * Array
    * Function
    */
  /* props: { //另外一种写法
    articles: Array,
    servers: Object
  }, */
  props:["articles","servers"],
  data() {
      return {
          datas:{title:"我的资料"}
      }
  },
  created() {
    console.log("this.servers",this.servers);
  },
  methods: {
    emitIndex(index) {
      this.$emit("onEmitIndex", "第"+index+"个",this.datas);
    }
  }
};
</script>
