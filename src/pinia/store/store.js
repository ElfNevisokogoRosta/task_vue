import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      { id: '1', title: 'title1', description: '123123123', list: 1 },
      { id: '2', title: 'title2', description: '123123123', list: 1 },
      { id: '3', title: 'title3', description: '123123123', list: 1 },
      { id: '4', title: 'title4', description: '123123123', list: 2 },
      { id: '5', title: 'title5', description: '123123123', list: 2 },
      { id: '6', title: 'title6', description: '123123123', list: 2 }
    ]
  }),
  actions: {
    addTask(newTask) {
      this.tasks.push(newTask)
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
