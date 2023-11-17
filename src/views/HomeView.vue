<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
  <main>
    <div class="subheade-wraper">
      <h2>TaskMaster</h2>
      <div class="image-wraper">
        <img class="logo-img" src="../assets/logo.png" alt="" />
      </div>
    </div>
    <div class="componet-wraper">
        <TaskForm />
        <TaskList />
    </div>
  </main>
</template>
<style>
.subheade-wraper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
.componet-wraper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
</style>
