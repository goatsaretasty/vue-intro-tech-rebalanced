<template>
  <div class="add-todo">
    <span class="add-todo__title">Add Todo:</span> <input type=text v-model="newTodo" @keyup.enter="handleAddTodo(newTodo); clearField()"/>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  props: ['handleAddTodo'],
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    clearField: function() {
      this.newTodo = '';
    }
  }
}
</script>

<style scoped>
  .add-todo {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .add-todo__title {
    position: relative;
    top: 5px;
    font-size: 18px;
    margin-right: 10px;
  }
  input[type=text] {
    border: 1px solid rgb(61, 61, 247);
    padding: 5px;
    width: 250px;
    font-size: 18px;
  }

  input[type=text]:focus {
    transition: 0.5s;
    border: 3px solid #555;
  }
</style>
