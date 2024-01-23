<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="fnAddOneItem"></TodoInput>
    <TodoList
      :todoList="todoList"
      @removeOneItem="fnRemoveTodo"
      @toggleComplete="fnToggleComplete"
    ></TodoList>
    <TodoFooter @removeAllTodo="fnRemoveAllItem"></TodoFooter>
  </div>
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue'

const todoList = ref([])

// item 추가
const fnAddOneItem = (newTodoItem) => {
  const obj = { completed: false, item: newTodoItem }
  // 저장하는 로직
  localStorage.setItem(newTodoItem, JSON.stringify(obj))
  todoList.value.push(obj)
}

// item 전체 삭제
const fnRemoveAllItem = () => {
  localStorage.clear()
  todoList.value = []
}

// item 삭제
const fnRemoveTodo = (todo, index) => {
  localStorage.removeItem(todo.item)
  todoList.value.splice(index, 1)
}

// item 완료
const fnToggleComplete = (index) => {
  todoList.value[index].completed = !todoList.value[index].completed
  localStorage.setItem(
    todoList.value[index].item,
    JSON.stringify(todoList.value[index])
  )
}

const fnInit = () => {
  if (localStorage.length > 0) {
    todoList.value = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key))
    })
  }
}

fnInit()
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
