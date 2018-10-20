<template>
  <div class="router-links">
    <p class="nav"><router-link to="/">{{ home }}</router-link></p>
    <p class="nav"><router-link to="/about">{{ about }}</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      home: 'Go back to list',
      about: 'About this app',
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
