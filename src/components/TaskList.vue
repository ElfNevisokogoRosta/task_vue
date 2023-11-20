<script>
import TaskElement from './TaskElement.vue'
import { useTaskStore } from '../pinia/store/store'


export default {
  components: {
    TaskElement
  },
  setup() {
    const store = useTaskStore()

    const getList =  (list) => {
      return store.tasks.filter((t) => t.list === list)
    }
    const startDrag = (e, i) => {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemID', i.id)
    }
    const onDrop = (e) => {
      const id = e.dataTransfer.getData('itemID')
      store.editTask(id)
    }
    return {
      getList,
      startDrag,
      onDrop
    }
  }
}
</script>

<template>
  <div class="task-holder">
    <div class="task-column">
      <h2 class="task-column-title">In Progress</h2>
      <ul class="task-list" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <TaskElement
          v-for="task in getList(1)"
          :key="task.id"
          draggable="true"
          @dragstart="startDrag($event, task)"
          :task="task"
        >
        </TaskElement>
      </ul>
    </div>
    <div class="task-column">
      <h2 class="task-column-title-done task-column-title">Done</h2>
      <ul class="task-list" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <TaskElement
          v-for="task in getList(2)"
          :key="task.id"
          draggable="true"
          @dragstart="startDrag($event, task)"
          :task="task"
        >
        </TaskElement>
      </ul>
    </div>
  </div>
</template>

<style>
.task-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.task-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #454545;
  background-color: #454545;
}
.task-column-title {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #1c5a7c;
  border-radius: 6px 6px 0px 0px;
  padding: 9px 0px;
  text-align: center;
  color: #fff;
}
.task-column-title-done {
  background-color: #106354;
}
.task-list {
  width: 100%;
  height: 100%;
  display: inline-flex;
  padding: 16px 10px;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid #454545;
  background: #454545;
  min-height: 40px;
}
</style>
