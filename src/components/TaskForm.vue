<script setup>
import { useTaskStore } from '../pinia/store/store';
import { ref } from 'vue';
import {nanoid} from 'nanoid'

const store = useTaskStore();
const task = ref({
  id: nanoid(),
  title: '',
  description: '',
  complete: false,
})

const taskHandler = (e)=>{
  const fieldName  = e.target.name
  task.value[fieldName] = e.target.value
}

function addTask (e){
  store.addTask(task.value);
  e.target.reset()
}
</script>
<template>
  <div class="container">
    <h2 class="title">Add some task</h2>
    <form @submit.prevent="addTask" >
      <div class="form-container">
        <label class="input-box " for="">
          <input @change="taskHandler" class="input-title" name="title" type="text" />
        </label>
        <label class="input-box" for="">
          <textarea @change="taskHandler" class="input-des" id="story" name="dis" rows="5" cols="33"> </textarea>
        </label>
        <button>Add task</button>
      </div>
    </form>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.title {
  text-align: center;
  font-size: 30px;
  margin: 0px;
  padding: 0px;
}
.form-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.input-box{
  display: block;
  width: 100%;
  border: none;
}
.input-title{
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.input-des{
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
</style>
