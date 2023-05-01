import React from 'react'
import { View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import FriendItem from '~/components/Friends/item'
import Loading from '~/components/universal/loading'
import { useGetFriends } from '~/services/queries/friends'

const FriendsScreen = () => {
  const friends = useGetFriends()

  if (friends.isLoading) {
    return <Loading />
  }

  return (
    <View>
      <FlatGrid
        data={friends.data.data}
        renderItem={({ item }) => <FriendItem {...item} />}
        itemDimension={180}
        spacing={6}
        className='h-full'
      />
    </View>
  )
}

export default FriendsScreen
