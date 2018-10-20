<template>
  <div class="router-links">
    <p class="nav"><router-link to="/">{{ home }}</router-link></p>
    <p class="nav"><router-link to="/about">{{ about }}</router-link></p>
    <p class="nav"><router-link to="/completed">{{ completed }}</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      home: 'Home',
      about: 'About',
      completed: 'Completed'
    }
  }
}
</script>

<style scoped>
  .router-links {
    display: inline;
    margin: 10px;
  }

a {
  text-decoration: none;
}

</style>
