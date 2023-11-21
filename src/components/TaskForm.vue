<script setup>
import { useTaskStore } from '../pinia/store/store'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

const store = useTaskStore()
const task = ref({
  title: '',
  dis: ''
})

const taskHandler = (e) => {
  const fieldName = e.target.name
  task.value[fieldName] = e.target.value
}

function addTask(e) {
  if (task.value.title === '') {
    return alert('enter task title')
  }
  if (task.value.dis === '') {
    return alert('enter task discription')
  }
  const newTask = { ...task.value, id: nanoid(), list: 'undone' }
  store.addTask(newTask)
  e.target.reset()
}
</script>
<template>
  <div class="container">
    <h2 class="title">Add some task</h2>
    <form @submit.prevent="addTask">
      <div class="form-container">
        <label class="input-box" for="title">
          <input
            @change="taskHandler"
            id="title"
            class="input-title"
            name="title"
            type="text"
            maxlength="50"
            placeholder="Task title"
            :value="task.title"
          />
        </label>
        <label class="input-box" for="story">
          <textarea
            @change="taskHandler"
            class="input-des"
            id="story"
            name="dis"
            rows="5"
            cols="33"
            placeholder="Task description"
            :value="task.description"
          >
          </textarea>
        </label>
        <button class="task-form-button">Add task</button>
      </div>
    </form>
  </div>
</template>
<style></style>
