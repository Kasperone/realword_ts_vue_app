<template>
  <div id="app">
    <c-navbar />
    <router-view/>
    <c-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import cNavbar from '@/components/cNavbar.vue'
import cFooter from '@/components/cFooter.vue'

@Options({
  components: {
    cNavbar,
    cFooter,
  }
})

export default class App extends Vue {

}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
