import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { ApiPost } from '../api/posts'

export const useGetPostById = (id: string) => {
  return useQuery(['posts', id], () => ApiPost.getPostById(id))
}

export const useGetPostInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['postsInfinite'],
    queryFn: ({ pageParam = 1 }) =>
      ApiPost.getPostPaginate({ pageCurrent: pageParam, pageSize: 10 }),
    getNextPageParam: (lastPage) =>
      lastPage.pageCurrent >= lastPage.totalPages
        ? undefined
        : lastPage.pageCurrent + 1,
  })
}
