<script setup>
import { useTaskStore } from '../pinia/store/store'

const store = useTaskStore()
const props = defineProps(['task'])

const { id, title, description, list } = props.task

const deleteTask = () => {
  store.deleteTask(id)
}
</script>
<template>
  <li class="task-element" v-bind="{ id }">
    <h3 class="task-title">{{ title }}</h3>
    <p class="task-des">
      {{ description }}
    </p>
    <button v-if="list === 2" @click="deleteTask" class="delete-btn">Delete</button>
  </li>
</template>
<style>
.task-element {
  width: 100%;
  display: flex;
  padding: 8px 15px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 6px;
  border: 1px solid #3e3e3e;
  background-color: #363636;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
}
.task-des {
  color: #c6c6c6;
  width: 377px;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  white-space: normal;
}
.task-title {
  margin: 0;
  padding: 0;
  display: flex;
  padding: 6px 14px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #000;
  color: #fff;
}
.delete-btn {
  width: 100px;
  margin: 0;
  margin-top: -15px;
  padding: 9px 13px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  color: #fff;
  background-color: #6b5d5c;
}
</style>
