// import Api from './api'
import { axiosRequest } from './apiAxios'

const loginUser = async ({ userName, password }) => {
  const result = await axiosRequest
    .post('auth/login', { userName, password })
    .then((r) => r.data)
    .catch((e) => e.message)
    console.log(result)
  localStorage.setItem('token', result.token)
  localStorage.setItem('refreshToken', result.refreshToken)
  return result
}
const registerUser = async ({ userName, password }) => {
  const result = axiosRequest
    .post('users', { userName, password })
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const getUserInfo = async () => {
  const result = await axiosRequest
    .get('users')
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const tokenization = async ()=>{
  const result = await axiosRequest
   .get('auth/refresh')
   .then((r) => r.data)
   .catch((e) => e.message)
  console.log(result)
   localStorage.setItem('token', result.token)
   localStorage.setItem('refreshToken', result.refreshToken)
  return result
}

const authRoute = { loginUser, registerUser, getUserInfo, tokenization }
export default authRoute
