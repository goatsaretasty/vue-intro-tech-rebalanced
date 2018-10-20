<template>
  <v-container grid-list-md text-xs-center>
    <div id="app">
      <header>
        <h1 class="app-title">Intro to Vue.js</h1>
      </header>
      <!-- <base-nav></base-nav> -->
      <div class="router-links">
        <p class="nav"><router-link to="/">Home</router-link></p>
        <p class="nav"><router-link to="/about">About</router-link></p>
      </div>
      <router-view></router-view>
      <!-- router view is a functional component that will match the rendered component 
      https://router.vuejs.org/api/#router-view -->
      <footer> 
         <span class="footer-title">2018 | Tech, Rebalanced</span>
      </footer>
    </div>
  </v-container>
</template>

<script>
import BaseNav from './components/BaseNav';

export default {
  name: "App",
  components: {
    BaseNav
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.app-title {
  margin-bottom: 20px;
}

.nav {
  display: inline;
  margin: 10px;
}

a {
  text-decoration: none;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer-title {
  font-size: 16px;
}
</style>
