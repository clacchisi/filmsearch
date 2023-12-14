<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <SearchMovie/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchMovie from './components/SearchMovie.vue';

export default defineComponent({
  name: 'App',
  components: {
    SearchMovie
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: black;
  padding-bottom: 5%;
  padding-top: 5%;
}
html {
  background: black;
}
p {
  color: #4ca0f3
}
</style>
