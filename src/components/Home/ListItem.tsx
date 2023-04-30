import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import type { HomeListData } from '@/app/(tabs)'
import { AntDesign, Entypo } from '@expo/vector-icons'

import Tag from '../universal/tag'

const HomeListItem: FC<(typeof HomeListData)[0]> = ({
  time,
  title,
  content,
  tags,
  category,
}) => {
  return (
    <TouchableOpacity className="bg-white shadow-2xl rounded-md p-3 mt-1">
      <View className="flex-row gap-2">
        {/* <Text className=''>{time}</Text> */}
        <Text className="text-lg font-medium">{title}</Text>
      </View>
      <Text numberOfLines={2} className="mt-1 text-gray-700 text-base">
        {content}
      </Text>
      <View className="flex-row justify-between mt-2">
        <View className="flex-row space-x-4 items-center">
          <View className="flex-row space-x-1">
            <Entypo name="back-in-time" size={18} color="#9ca3af" />
            <Text className="text-gray-400 text-sm">{time}</Text>
          </View>
          <View className="flex-row space-x-1">
            <AntDesign name="tagso" size={18} color="#9ca3af" />
            {tags.map((tag, index) => (
              <Text key={index} className="text-gray-400 text-sm">
                {tag}{index == tags.length - 1 ? '' : ' |'}
              </Text>
            ))}
          </View>
        </View>

        <Tag>{category}</Tag>
      </View>
    </TouchableOpacity>
  )
}

export default HomeListItem
