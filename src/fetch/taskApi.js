import {axiosRequest} from './apiAxios'

const getAll = async (id) => {
  const result = await axiosRequest
    .get('tasks', {
      id
    })
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const addNew = async (id, task) => {
  const result = await axiosRequest
    .post(`tasks/${id}`, {
      ...task
    })
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const deleteTask = async (id) => {
  const result = await axiosRequest
    .delete(`tasks/${id}`)
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}
const updateTask = async (id) => {
  const result = await axiosRequest
    .patch(`tasks/list/${id}`)
    .then((r) => r.data)
    .catch((e) => e.message)
  return result
}

export const taskApi = { getAll, deleteTask, updateTask, addNew }


