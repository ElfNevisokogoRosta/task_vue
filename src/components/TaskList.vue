<script setup>
import draggable from 'vuedraggable'
import TaskElement from './TaskElement.vue'
import { useTaskStore } from '../pinia/store/store'
import { computed } from 'vue';

const store = useTaskStore()
const unCompleted = computed(()=>store.unCompleted)
const completed = computed(()=>store.completed)

const unCompletedKey = 'unCompleted';
const completedKey = 'completed';
const onEnd = (e) => {
  const id = e.item.id
  store.editTask(id)
}
</script>

<template>
  <div class="task-holder">
    <h2>In Progress</h2>
    <draggable :item-key="unCompletedKey"  @add="onEnd" v-model="unCompleted" tag="ul" group="task">
      <template #item="{ element: task }">
        <TaskElement :key="task.id" :task="task"></TaskElement>
      </template>
    </draggable>
  </div>
  <div class="task-holder">
    <h1>Done</h1>
    <draggable  :item-key="completedKey" @add="onEnd" v-model="completed" tag="ul" group="task">
      <template #item="{ element: task }">
        <TaskElement :key="task.id" :task="task"></TaskElement>
      </template>
    </draggable>
  </div>
</template>

<style>
.task-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  margin: 15px 25px;
}
.title {
  text-align: center;
  margin: 0;
  padding: 0;
}
.task-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.task-holder {
  display: flex;
  flex-direction: column;
  width: 48%;
}
</style>
