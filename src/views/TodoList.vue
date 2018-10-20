<template>
  <div>
    <add-todo :handleAddTodo="addTodo"></add-todo>
      <!-- Here, I'm importing my input box component and passing it a handleAddTodo prop, this will bind the addTodo method
     so that I can add an item to the todoList -->
    <ul>
      <li v-for="(todo, i) in todoList" :key=i id="todo-list__item">
        <!-- v-for allows me to iterate over the todoList that is in my data object -->
        <!-- v-for takes up to two arguments: the item and its index; the index is optional; https://vuejs.org/v2/guide/list.html -->
      <span :class="{'completed': todo.isComplete}" id="todo-list__item-name">{{ todo.name }}</span>
        <!-- vue allows for class bindings so that I can render a different style for items that are complete -->
        <!-- the completed class will ONLY be toggled if the todo.isComplete value is true -->
        <div class="btn-container">
          <v-btn class="complete-btn btn" @click="completeTodo(i)">✔</v-btn>
          <v-btn class="delete-btn btn" @click="deleteTodo(i)">X</v-btn>
          <!-- /* v-btn is a vuetify component that I'm using here instead of creating my own buttons */ -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AddTodo from '../components/AddTodo';

export default {
  name: "TodoList",
  components: {
    AddTodo,
  },
  data() {
    return {
      todoList: [],
    };
  },
  /* `created` is a lifecycle method; lifecycle methods are very useful 
    if you need to run code at a specific point in the component's lifecycle, in this case I want to make sure
    I receive my list data from the API, and that it is available on the component when the component is initialized.
  */
  async created() {
    this.todoList = await this.fetchList();
  },
  methods: {
    // using async and await to fetch data from an API
    // Note: I'm NOT using es6 synax on these methods (e.g. () => {} ) because the value of `this` doesn't have context of the vue instance
    fetchList: async function() {
      const response = await fetch("https://api.myjson.com/bins/84dc0");
      const data = await response.json();
      return data.todos;
    },
    addTodo: function(newTodo) {
      this.todoList.push({ name: newTodo, isComplete: false});
    },
    deleteTodo: function(i) {
      return this.todoList.splice(i, 1);
    },
    completeTodo: function(i) {
      this.todoList[i].isComplete = !this.todoList[i].isComplete;    
      console.log('the index:', i, 'status:', this.todoList[i].isComplete)  
    }
  },
  computed: {
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style-type: none;
  margin: 10px;
}

#todo-list__item {
  border: 1px solid #7937fc;
  border-radius: 2px;
  padding: 20px 20px 20px 20px;
  font-size: 18px;
}

.completed {
  text-decoration: line-through;
}

#todo-list__item-name {
  padding-right: 100px;
}

.btn-container {
  position: relative;
  top: -30px;
  display: flex;
  justify-content: flex-end;
}

.complete-btn {
  border: 2px solid #4caf50;
  font-weight: 600;
  /* // padding: 5px 10px 5px 10px; */
  margin: 5px;
}
.complete-btn:hover {
  background-color: #4caf50;
}

.delete-btn {
  border: 2px solid red;
  font-weight: 600;
  /* // padding: 10px 10px 10px 10px */
}

.delete-btn:hover {
  background-color: red;
}
</style>
