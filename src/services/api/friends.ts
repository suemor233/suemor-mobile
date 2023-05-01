import { Get } from '../server'
import type { FriendsType } from '../types/friends'

function getFriends() {
  return Get<Record<'data', FriendsType[]>>(`/friends/all`)
}

export const ApiFriends = {
  getFriends,
}
