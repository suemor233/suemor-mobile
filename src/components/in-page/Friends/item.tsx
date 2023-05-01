import { Link } from 'expo-router'
import type { FC } from 'react'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import type { FriendsType } from '~/services/types/friends'

const FriendItem: FC<FriendsType> = ({ name, description, avatar, url }) => {
  return (
    <Link
      asChild
      href={{
        pathname: '/friend',
        params: { uri: url.split('https://')[1], title: name },
      }}
    >
      <TouchableOpacity className="bg-white dark:bg-zinc-900  py-4 px-2 rounded-md space-y-2">
        <Image
          source={{ uri: avatar }}
          className="h-14 w-14 rounded-full mx-auto"
        />
        <View className="items-center">
          <Text className="font-bold text-lg dark:text-white" numberOfLines={1}>
            {name}
          </Text>
          <Text className="text-sm dark:text-gray-400" numberOfLines={1}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default FriendItem
