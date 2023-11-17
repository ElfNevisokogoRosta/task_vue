<script setup>
import { useTaskStore } from '../pinia/store/store'

const store = useTaskStore()
const props = defineProps(['task'])

const { id, title, description, complete } = props.task

const deleteTask = () => {
  store.deleteTask(id)
}
</script>
<template>
  <li class="task-element" v-bind="{ id }">
    <h3 class="task-title">{{ title }}</h3>
    <p class="task-des">
      {{ description }}
      <button v-if="complete" @click="deleteTask" class="delete-btn">Delete</button>
    </p>
  </li>
</template>
<style>
.task-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.task-des {
  display: flex;
  justify-content: space-between;
  width: 264px;
  margin: 0;
  padding: 0;
  font-size: 15px;
  text-align: center;
  border: none;
}
.task-title {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
}.delete-btn {
  width: 100px;
  margin: 0;
  padding: 12px 23px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}</style>