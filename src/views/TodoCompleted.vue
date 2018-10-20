<template>
  <ul>
    <li v-for="(complete, i) in completed" :key=i>{{ complete.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TodoCompleted',
  props: ['completed'],
  // data() {
  //   return {

  //   }
  // }
}
</script>

<style>

</style>
