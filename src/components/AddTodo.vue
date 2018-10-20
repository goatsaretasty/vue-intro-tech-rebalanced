<template>
  <div class="add-todo">
    <span class="add-todo__title">Add Todo:</span> 
    <input type=text v-model="newTodo" @keyup.enter="handleAddTodo(newTodo); clearField()"/>
    <!-- When I hit enter, handleAddTodo will fire with the newTodo information, then clearField will clear the input box -->
    <!-- v-model allows for two-way binding; any text added to the input box will ALSO update my newTodo property, that way I can just
      pass this data to my handleAddTodo method -->
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  // This component is expecting a prop called 'handleAddTodo'
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
