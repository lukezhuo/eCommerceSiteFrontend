<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top: 0px
}
</style>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
};
</script>cd
