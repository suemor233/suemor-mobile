import { useQuery } from '@tanstack/react-query'

import { ApiFriends } from '../api/friends'

export const useGetFriends = () => {
  return useQuery(['friends'], ApiFriends.getFriends, {
    refetchOnWindowFocus: false,
  })
}
