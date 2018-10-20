<template> 
  <div class="about">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      text: 'A simple todo app to demonstrate the concepts of Vue.js.',
    }
  }
}
</script>

<style scoped>

.about {
  margin-top: 20px;
}

</style>
