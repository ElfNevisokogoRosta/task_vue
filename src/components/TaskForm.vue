<script setup>
import { useTaskStore } from '../pinia/store/store'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

const store = useTaskStore()
const task = ref({
  id: nanoid(),
  title: '',
  dis: '',
  list: 2
})

const taskHandler = (e) => {
  const fieldName = e.target.name
  task.value[fieldName] = e.target.value
}

function addTask(e) {
  store.addTask(task.value)
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
