<template>
  <div class="clearAllContainer" @click="fnClearTodo">
    <span class="clearAllBtn"> Clear All </span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const fnClearTodo = () => {
  store.commit('REMOVE_ITEMS')
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
