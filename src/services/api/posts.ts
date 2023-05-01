import { Get } from '../server'
import type { PostsPaginateType, postType } from '../types/post'

export interface PageType {
  pageCurrent: number
  pageSize: number
}

function getPostPaginate(params: PageType) {
  return Get<PostsPaginateType>(`/post`, params)
}

function getPostById(id: string) {
  return Get<postType>(`/post/${id}`)
}

export const ApiPost = {
  getPostPaginate,
  getPostById,
}
