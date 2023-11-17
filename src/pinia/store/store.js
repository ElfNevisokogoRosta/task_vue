import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      { id: '1', title: 'title1', description: '123123123', complete: false },
      { id: '2', title: 'title2', description: '123123123', complete: false },
      { id: '3', title: 'title3', description: '123123123', complete: false },
      { id: '4', title: 'title4', description: '123123123', complete: true },
      { id: '5', title: 'title5', description: '123123123', complete: true },
      { id: '6', title: 'title6', description: '123123123', complete: true }
    ]
  }),
  getters: {
    unCompleted: (state) => {
      return state.tasks.filter((t) => {
        if (!t.complete) {
          return t
        }
      })
    },
    completed: (state) => {
      return state.tasks.filter((t) => {
        if (t.complete) {
          return t
        }
      })
    }
  },
  actions: {
    addTask(newTask) {
      this.tasks =this.tasks.push(newTask)
    },
    deleteTask(id) {
        const index = this.tasks.findIndex((t) => t.id === id)
        if(index === -1){
            return alert('Smt wrong, run away')
        }
      this.tasks = this.tasks.toSpliced(index, 1)
    },
    editTask(id) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index === -1) {
        return alert('Smt wrong, run away')
      }
     this.tasks = this.tasks.toSpliced(index, 1, (this.tasks[index].complete = !this.tasks[index].complete))
    }
  }
})
