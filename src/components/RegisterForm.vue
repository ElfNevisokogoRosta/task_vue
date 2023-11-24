<script setup>
import { reactive, ref } from 'vue'
import authRoute from '../fetch/userApi';

const loading = ref(false)
const isError = ref(false)
const inputData = reactive({ username: '', password: '', confirmPassword: '' })
const isCompare = ref(true)
const usernameHandler = (e) => {
  inputData.username = e.target.value.trim();
}
const passwordHandler = (e) => {
  inputData.password = e.target.value.trim();
}
const passwordConfirmHandler = (e) => {
  inputData.confirmPassword = e.target.value.trim();
}
const registerHanlder = async (e) => {
  if (inputData.username === '') {
    return alert('Enter user name')
  }
  if (inputData.password === '') {
    return alert('Enter password')
  }
  if (inputData.password < 7) {
    return alert('Password must be at least 7 characters')
  }
  if (inputData.password !== inputData.confirmPassword) {
    return (isCompare.value = false)
  }
  loading.value = true
  try {
    const result = await authRoute.registerUser()
    loading.value = false
    if (result.status === 200) {
      alert('Registered successfully')
      window.location.href = '/login'
    }
  } catch (error) {
    isError.value = error
  }
  ; (inputData.username = ''), (inputData.password = ''), (inputData.confirmPassword = '')
  e.target.reset()
  return
}
</script>

<template>
  <main class="main-container">
    <div class="form-wraper">
      <form @submit.prevent="registerHanlder" action="">
        <h2 class="form-title">Register form</h2>
        <div class="form-container">
          <lable class="input-container" for="loginEmail"><input class="form-input" id="loginEmail" type="text"
              autocomplete="off" autp placeholder="Enter username" :value="usernameValue" @change="usernameHandler" />
          </lable>
          <lable class="input-container" for="loginPass"><input class="form-input" id="loginPass" type="password"
              autocomplete="new-password" placeholder="Enter password" :value="passwordValue" @change="passwordHandler" />
          </lable>
          <lable class="input-container" for="loginRepeatPass"><input class="form-input" id="loginRepeatPass"
              type="password" autocomplete="new-password" placeholder="Repeat password" :value="passwordConfirmValue"
              @change="passwordConfirmHandler" /></lable>
          <button class="submit-btn">Register</button>
        </div>
      </form>
    </div>
  </main>
</template>
