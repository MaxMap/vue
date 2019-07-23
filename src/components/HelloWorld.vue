<template>
  <div class="section">
    <h3>1.props/$emit</h3>
    <com-article :articles="articleList" :servers="servers" @onEmitIndex="onEmitIndex"></com-article>
    <p>接收到子级数据:{{currentIndex}}</p>
    <br>
    <br>
    <br>
    <h3>2.$children/$parent</h3>
    <div>{{msg}}</div>
    <com-a></com-a>
    <button @click="changeA">点击改变子组件值</button>
    <br>
    <br>
    <br>
    <h3>3.provide/ inject</h3>
    <p>provide/ inject 是vue2.2.0新增的api, 简单来说就是父组件中通过provide来提供变量, 然后再子组件中通过inject来注入变量。</p>
    <comB></comB>
    <br>
    <br>
    <br>
    <h3>4.ref/ refs</h3>
    <d ref="namec"></d>
    <h3>5.eventBus</h3>
    <p>eventBus 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。</p>
    <p>eventBus也有不方便之处, 当项目较大,就容易造成难以维护的灾难</p>
    <e></e>
    <f></f>
    <br>
    <br>
    <br>
    <h3>6.Vuex</h3>
    <p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.
Vuex 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上</p>
    <io></io>
    <k></k>
    <p>getters:过滤数组 《10：{{filter}}</p>
    <div>
      modules--姓名:{{useName}}
      <!-- 增加h2 展示 localJobTitle -->
      <h2>{{localJobTitle}}</h2>
      <button @click="changeName"> change to json</button>
    </div>
    <br>
    <br>
    <br>
    <h3>7.localStorage / sessionStorage</h3>
    <p>这个就不详细说了</p>
    <p>window.localStorage.getItem(key)获取数据 通过window.localStorage.setItem(key,value)存储数据</p>
    <br>
    <br>
    <br>
    <h3>8.attrs/$listeners</h3>
    <p>现在我们来讨论一种情况， 我们一开始给出的组件关系图中A组件与D组件是隔代关系， 那它们之前进行通信有哪些方式呢？</p>
    <ul>
      <li>使用props绑定来进行一级一级的信息传递, 如果D组件中状态改变需要传递数据给A, 使用事件系统一级级往上传递</li>
      <li>使用eventBus,这种情况下还是比较适合使用, 但是碰到多人合作开发时, 代码维护性较低, 可读性也低</li>
      <li>使用Vuex来进行数据管理, 但是如果仅仅是传递数据, 而不做中间处理,使用Vuex处理感觉有点大材小用了.</li>
      <p>在vue2.4中，为了解决该需求，引入了$attrs 和$listeners ， 新增了inheritAttrs 选项。 在版本2.4以前，默认情况下父作用域的不被认作props的属性百年孤独，将会“回退”且作为普通的HTML特性应用在子组件的根元素上。接下来看一个跨级通信的例子:</p>
    </ul>
    <gs
      :name="name"
      :age="18"
      :gender="gender"
      :height="158"
      title="程序员成长指北"
      v-on:upRocket="reciveRocket"
    ></gs>
  </div>
</template>

<script>
import b from "@/components/children/b";
import a from "@/components/children/a";
import c from "@/components/children/c";
import d from "@/components/children/d";
import e from "@/components/children/e";
import f from "@/components/children/f";
import g from "@/components/children/g";
import i from "@/components/children/i";
import k from "@/components/children/k";
import {mapActions, mapState,mapGetters} from "vuex";
export default {
  name: "HelloWorld",
  components: { comArticle: a, ComA: b, comB: c, d, e, f ,gs:g,io:i,k},
  data() {
    return {
      articleList: ["红楼梦", "西游记", "三国演义"],
      servers: { age: 18, name: "小飞" },
      currentIndex: null,
      msg: "Welcome",
      name: "zhang",
      age: "18",
      gender: "女",
      height: "158"
    };
  },
  provide: {
    for: "demo"
  },
  mounted() {
    // console.log(this.$children);
    const namec = this.$refs.namec;
    console.log(namec.name); // Vue.js
    namec.sayHello(); // hello
  },
  computed: {
    
    useName: function(){
      return this.$store.state.login.useName
    },
    filter: function(){
      return this.$store.getters.filter
    }
  },
  methods: {
    changeName(){
      this.$store.dispatch("changeName","Jasion")
    },
    onEmitIndex(idx, demo) {
      console.log(demo);
      this.currentIndex = idx;
    },
    changeA() {
      // 获取到子组件b
      //$children获取具体的子级可以判断$children的_uid唯一值， 引用方式顺序变化并不影响
      this.$children[1].messageA = "this is new value";
    },
    reciveRocket(){
      console.log("reciveRocket success")
   }
  }
};
</script>