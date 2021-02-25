import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/tasks`),
  post: (data)=> axios.post(`${baseUrl}/tasks`, data),
  delete: (id)=> axios.delete(`${baseUrl}/tasks/${id}`),
  patch: (id,data)=> axios.patch(`${baseUrl}/tasks/${id}`,data),
  put: (id,data)=>axios.put(`${baseUrl}/tasks/${id}`,data)
}