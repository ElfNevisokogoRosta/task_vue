<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="subheade-wraper">
      <h2 class="main-title">TaskMaster</h2>
      <div class="image-wraper">
        <RouterLink to="/"> <img class="logo-img" src="@/assets/logo.png" alt="" /></RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  padding: 30px 0px;
}
.subheade-wraper {
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: 0px auto;
}
.logo-img {
  width: 80px;
  height: 80px;
}
.main-title{
  cursor: default;
}
</style>
