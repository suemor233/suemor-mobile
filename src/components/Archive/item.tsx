import type { FC } from 'react'
import React from 'react'
import { Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import type { Post } from '~/services/types/archive'
import { parseDate } from '~/utils/time'

const ArchiveItem: FC<Post> = ({ title, created, category, tags }) => {
  return (
    <View className="bg-white rounded-md shadow-md">
      <View>
        <Text className="text-lg">{title}</Text>
        <View className="flex-row space-x-1">
          <Entypo name="back-in-time" size={18} color="#9ca3af" />
          <Text>{parseDate(created, 'YYYY-MM-DD')}</Text>
        </View>
      </View>
    </View>
  )
}

export default ArchiveItem
