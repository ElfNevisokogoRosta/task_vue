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
    const usernameValue = ref('')
    const usernameHandler = (e) => {
      usernameValue.value = e.target.value
    }
    const passwordHandler = (e) => {
      passwordValue.value = e.target.value
    }
    const loginHandler = () => {
      if (usernameValue.value === '') {
        return alert('Enter user name')
      }
      if (passwordValue.value === '') {
        return alert('Enter password')
      }
      if (passwordValue.value.length < 7) {
        return alert('Password must be at least 7 characters')
      }
      loading.value = true
      // const data = axios
      //   .post('http://localhost:3000/auth/login', {
      //     username: usernameValue.value,
      //     password: passwordValue.value
      //   })
      //   .then((data) => {
      //     loading.value = false
      //     return data
      //   })
      //   .catch((err) => {
      //     loading.value = false
      //     console.log(err)
      //   })
      // ;(usernameValue.value = ''), (passwordValue.value = ''), e.target.reset()
      return localStorage.setItem('token', "123123123")
    }
    return {
      usernameValue,
      usernameHandler,
      passwordHandler,
      passwordValue,
      loginHandler,
      loading
    }
  }
}
</script>
<template>
  <main class="main-container">
    <div class="form-wraper">
      <form @submit.prevent="loginHandler" action="">
        <h2 class="form-title">Login form</h2>
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
          <button :disabled="loading" class="submit-btn">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<style>
.main-container {
  width: 1280px;
  margin: 0 auto;
}
.form-wraper {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
  border-radius: 32px;
}
.form-wraper > form {
  width: 100%;
}
.form-title {
  text-align: center;
  font-size: 24px;
  margin: 0px 0px 20px 0px;
}
.form-container {
  display: flex;
  gap: 16px;
}
.input-container {
  width: 100%;
}
.form-input {
  width: 100%;
  padding: 12px 12px 12px 32px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  border: none;
  border-radius: 16px;
  background-color: #292929;
  color: #fff;
}
.submit-btn {
  width: 160px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 16px;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #292929;
  transition:
    color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.submit-btn:hover {
  background-color: #292929;
  color: #fff;
}
</style>
