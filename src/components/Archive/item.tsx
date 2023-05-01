import { Link } from 'expo-router'
import type { FC } from 'react'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { AntDesign, Entypo } from '@expo/vector-icons'

import type { Post } from '~/services/types/archive'
import { parseDate } from '~/utils/time'

const ArchiveItem: FC<Post> = ({ _id, title, created, category, tags }) => {
  return (
    <Link asChild href={`posts/${_id}`}>
      <TouchableOpacity className="bg-white rounded-md shadow-md p-2 space-y-1">
        <Text className="text-base" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row space-x-1">
          <Entypo name="back-in-time" size={18} color="#9ca3af" />
          <Text numberOfLines={1} className="text-gray-400">
            {parseDate(created, 'YYYY-MM-DD')}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <AntDesign name="tagso" size={18} color="#9ca3af" />
          <View className="flex-row space-x-2 overflow-hidden">
            {tags.map((tag, index) => (
              <Text key={index} className="text-gray-400 bg-gray-100 text-sm">
                {tag}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default ArchiveItem
