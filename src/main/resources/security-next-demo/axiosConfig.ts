import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8878', // 替换为你的后端地址
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
