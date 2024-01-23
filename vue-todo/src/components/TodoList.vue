<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index" class="shadow">
        <i
          class="checkBtn fas fa-check"
          :class="{ checkBtnCompleted: todo.completed }"
          @click="fnToggleComplete(index)"
        ></i>
        <span :class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
        <span @click="fnRemoveTodo(todo, index)" class="removeBtn">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  todoList: {
    type: Array,
    default: null,
  },
})

const emits = defineEmits(['removeOneItem', 'toggleComplete'])

const fnRemoveTodo = (todo, index) => {
  emits('removeOneItem', todo, index)
}

const fnToggleComplete = (index) => {
  emits('toggleComplete', index)
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
