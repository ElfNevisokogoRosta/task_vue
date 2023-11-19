<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
  <main>
    <div class="componet-wraper">
      <TaskForm />
      <TaskList />
    </div>
  </main>
</template>
<style>
.subheade-wraper {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}
.image-wraper {
  width: 50px;
  height: 50px;
  position: relative;
  padding-top: 0%;
}
.logo-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.componet-wraper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}
</style>
