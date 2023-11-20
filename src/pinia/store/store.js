import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
     
    ]
  }),
  actions: {
    addTask(newTask) {
      this.tasks.push(newTask)
      console.log(this.tasks)
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index === -1) {
        return alert('Smt wrong, run away')
      }
      this.tasks = this.tasks.toSpliced(index, 1)
    },
    editTask(id) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index === -1) {
        return alert('Smt wrong, run away')
      }
      if (this.tasks[index].list === 1) {
        return (this.tasks[index].list = 2)
      }
      this.tasks[index].list = 1
    }
  }
})
