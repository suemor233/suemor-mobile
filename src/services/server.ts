import axios from 'axios'
import type { ApiResponse } from './api'


axios.interceptors.request.use((config) => {
  config.baseURL = 'http://192.168.10.103:4913'
  return config
})


export const Get = <T>(url: string, params?: {}): ApiResponse<T> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        resolve(result ? result.data : result)
      })
      .catch((err) => {
        resolve(err)
      })
  })

export const Post = <T>(
  url: string,
  data: unknown,
  params?: {},
): ApiResponse<T> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        resolve(result ? result.data : result)
      })
      .catch((err) => {
        resolve(err)
      })
  })
}

export const Patch = <T>(
  url: string,
  data: unknown,
  params?: {},
): ApiResponse<T> => {
  return new Promise((resolve) => {
    axios
      .patch(url, data, { params })
      .then((result) => {
        resolve(result ? result.data : result)
      })
      .catch((err) => {
        resolve(err)
      })
  })
}
