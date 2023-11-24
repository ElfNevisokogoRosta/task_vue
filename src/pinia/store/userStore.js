import { defineStore } from 'pinia'
import authRoute from '../../fetch/userApi'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      id: ''
    }
  },
  actions: {
    async setUserData() {
      const result = await authRoute.getUserInfo()
      this.username = result.userName
      this.id = result.id
    }
  }
})
