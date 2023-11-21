<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  inject: {
    axios
  },
  setup() {
    const loading = ref(false)
    const passwordValue = ref('')
    const passwordConfirmValue = ref('')
    const usernameValue = ref('')
    const usernameHandler = (e) => {
      usernameValue.value = e.target.value
    }
    const passwordHandler = (e) => {
      passwordValue.value = e.target.value
    }
    const passwordConfirmHandler = (e) => {
      passwordConfirmValue.value = e.target.value
    }
    const registerHanlder = (e) => {
      if (usernameValue.value === '') {
        return alert('Enter user name')
      }
      if (passwordValue.value === '') {
        return alert('Enter password')
      }
      if (passwordValue.value.length < 7) {
        return alert('Password must be at least 7 characters')
      }
      if (passwordValue.value !== passwordConfirmValue.value) {
        return alert('Passwords do not match')
      }
      loading.value = true
      const data = axios
        .post('http://localhost:3000/users', {
          username: usernameValue.value,
          password: passwordValue.value
        })
        .then((data) => {
          loading.value = false
          return data
        })
        .catch((err) => {
          loading.value = false
          console.log(err)
        })
      ;(usernameValue.value = ''), (passwordValue.value = ''), e.target.reset()
      return data
    }
    return {
      usernameValue,
      usernameHandler,
      passwordHandler,
      passwordValue,
      registerHanlder,
      loading,
      passwordConfirmValue,
      passwordConfirmHandler
    }
  }
}
</script>

<template>
  <main class="main-container">
    <div class="form-wraper">
      <form @submit.prevent="registerHanlder" action="">
        <h2 class="form-title">Register form</h2>
        <div class="form-container">
          <lable class="input-container" for="loginEmail"
            ><input
              class="form-input"
              id="loginEmail"
              type="text"
              placeholder="Enter username"
              :value="usernameValue"
              @change="usernameHandler"
          /></lable>
          <lable class="input-container" for="loginPass"
            ><input
              class="form-input"
              id="loginPass"
              type="password"
              autocomplete="off"
              placeholder="Enter password"
              :value="passwordValue"
              @change="passwordHandler"
          /></lable>
          <lable class="input-container" for="loginRepeatPass"
            ><input
              class="form-input"
              id="loginRepeatPass"
              type="password"
              autocomplete="off"
              placeholder="Repeat password"
              :value="passwordConfirmValue"
              @change="passwordConfirmHandler"
          /></lable>
          <button class="submit-btn">Register</button>
        </div>
      </form>
    </div>
  </main>
</template>
