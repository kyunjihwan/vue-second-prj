<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="container">
      <li
        v-for="(todo, index) in $store.state.todoList"
        :key="index"
        class="shadow"
      >
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
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const fnRemoveTodo = (todo, index) => {
  store.commit('REMOVE_ITEM', { todo, index })
}

const fnToggleComplete = (index) => {
  store.commit('TOGGLE_COMPLETE', index)
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  transition: all 1s;
}
</style>
