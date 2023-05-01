import { useQuery } from "@tanstack/react-query"
import { ApiPost } from "../api/posts"

export const useGetPostById = (id: string) => {
  return useQuery(['posts', id], () => ApiPost.getPostById(id))
}
