<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <o-button text="Button text" @click="buttonClick" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    buttonClick() {
      console.log("click");
    }
  }
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
