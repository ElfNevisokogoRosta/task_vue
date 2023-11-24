import { defineStore } from 'pinia'
import { taskApi } from '../../fetch/taskApi'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  getters: {
    getUndone() {
      return this.tasks.filter((task) => task.list === 'undone')
    },
    getDone() {
      return this.tasks.filter((task) => task.list === 'done')
    }
  },
  actions: {
    async initTask(id) {
      const result = await taskApi.getAll(id)
      this.tasks = [...result]
    },
    async deleteTask(id) {
      await taskApi.deleteTask(id)
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    async updateTask(id) {
      const taskIndex = this.tasks.findIndex((t) => {
        return t.id == id
      })
      if (taskIndex === -1) {
        return null
      }
      if (this.tasks[taskIndex].list === 'done') {
        this.tasks[taskIndex].list = 'undone'
        await taskApi.updateTask(id)
      } else{
        this.tasks[taskIndex].list = 'done'
        await taskApi.updateTask(id)
      } 
    },
    async addNewTask(id, task){
        const result = await taskApi.addNew(id, task);
        this.tasks.push(result)
    }
  }
})
