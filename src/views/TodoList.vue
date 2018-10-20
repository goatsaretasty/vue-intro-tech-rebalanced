<template>
  <div>
    <add-todo :handleAddTodo="addTodo"></add-todo>
    <ul>
      <li v-for="(todo, i) in todoList" :key=i id="todo-list__item">
      <span :class="{'completed': todo.isComplete}" id="todo-list__item-name">{{ todo.name }}</span>
        <div class="btn-container">
          <v-btn class="complete-btn btn" @click="completeTodo(i)">✔</v-btn>
          <v-btn class="delete-btn btn" @click="deleteTodo(i)">X</v-btn>
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
    AddTodo
  },
  data() {
    return {
      todoList: [],
    };
  },
  async created() {
    // fetch the list from an API
    this.todoList = await this.fetchList();
  },
  methods: {
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
      // this.todoList[i] = this.todoList[i].isComplete = !this.todoList[i].isComplete
      this.todoList[i].isComplete = !this.todoList[i].isComplete;    
      console.log(i, 'completed', 'status:', this.todoList[i].isComplete)  

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
