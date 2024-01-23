<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="fnAddTodo" />
    <span class="addContainer" @click="fnAddTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodoItem = ref('')
const fnAddTodo = () => {
  if (newTodoItem.value !== '') {
    const obj = { completed: false, item: newTodoItem.value }
    // 저장하는 로직
    localStorage.setItem(newTodoItem.value, JSON.stringify(obj))
    fnClearInput()
  }
}

const fnClearInput = () => {
  newTodoItem.value = ''
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478f8, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
