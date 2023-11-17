<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="subheade-wraper">
      <h2>TaskMaster</h2>
      <div class="image-wraper">
        <img class="logo-img" src="@/assets/logo.png" alt="" />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
