<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="fnAddTodo" />
    <span class="addContainer" @click="fnAddTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
  <AlertModal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3 class="closeModalBtn">
        경고!<i class="fas fa-times" @click="showModal = false"></i>
      </h3>
    </template>
    <template v-slot:body>
      <div>입력하세요</div>
    </template>
  </AlertModal>
</template>

<script setup>
import { ref } from 'vue'
import AlertModal from './common/AlertModal'
import { useStore } from 'vuex'

const newTodoItem = ref('')
const showModal = ref(false)
const store = useStore()

const fnAddTodo = () => {
  if (newTodoItem.value !== '') {
    store.commit('ADD_ITEM', newTodoItem.value)
    fnClearInput()
  } else {
    showModal.value = true
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

.closeModalBtn {
  color: #42b983;
}
</style>
