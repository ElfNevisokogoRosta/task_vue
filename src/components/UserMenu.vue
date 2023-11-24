<script setup>

import { onMounted } from 'vue';
import { useUserStore } from '../pinia/store/userStore';
import router from '../router';

const store = useUserStore();
onMounted(async () => {
  await store.setUserData();
})
const onLogOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  router.push('/auth');
}
</script>
<template>
  <div class="user-container">
    <p class="user-text">Welcome! {{ store.username }}</p>
    <button class="user-btn" @click="onLogOut">Log Out</button>
  </div>
</template>
<style>
.user-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
}

.user-text {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  color: #f2f2f2;
}

.user-btn {
  background-color: #dbd5d5;
  font-size: 26px;
  border: none;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);

}

.user-btn:hover {
  color: azure;
  background-color: #332f2f;
}
</style>
../pinia/store/userStore