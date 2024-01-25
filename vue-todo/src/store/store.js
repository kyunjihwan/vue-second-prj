import { createStore } from 'vuex'

const storage = {
  fetch() {
    let arr = []
    if (localStorage.length > 0) {
      arr = Object.keys(localStorage).map((key) => {
        return JSON.parse(localStorage.getItem(key))
      })
    }
    return arr
  },
}

export const store = createStore({
  state: () => ({
    todoList: storage.fetch(),
  }),
  mutations: {
    ADD_ITEM(state, payload) {
      const obj = { completed: false, item: payload }
      localStorage.setItem(payload, JSON.stringify(obj))
      state.todoList.push(obj)
    },
    REMOVE_ITEM(state, { todo, index }) {
      localStorage.removeItem(todo.item)
      state.todoList.splice(index, 1)
    },
    REMOVE_ITEMS(state) {
      localStorage.clear()
      state.todoList = []
    },
    TOGGLE_COMPLETE(state, index) {
      state.todoList[index].completed = !state.todoList[index].completed
      localStorage.setItem(
        state.todoList[index].item,
        JSON.stringify(state.todoList[index])
      )
    },
  },
})
