import { Link } from 'expo-router'
import type { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import removeMd from 'remove-markdown'

import { AntDesign, Entypo } from '@expo/vector-icons'

import type { postItemType } from '~/services/types/post'
import { relativeTimeFromNow } from '~/utils/time'

import Tag from '../../universal/tag'

const HomeListItem: FC<postItemType> = ({
  created,
  title,
  content,
  tags,
  category,
  _id,
}) => {
  return (
    <Link asChild href={`posts/${_id}`}>
      <TouchableOpacity className="bg-white dark:bg-zinc-900 shadow-2xl rounded-md p-3 mt-1">
        <View className="flex-row gap-2">
          {/* <Text className=''>{time}</Text> */}
          <Text className="text-lg font-medium dark:text-white">{title}</Text>
        </View>
        <Text
          numberOfLines={2}
          className="mt-1 text-gray-700 dark:text-gray-300 text-base"
        >
          {removeMd(content)}
        </Text>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row space-x-4 items-center">
            <View className="flex-row space-x-1">
              <Entypo name="back-in-time" size={18} color="#9ca3af" />
              <Text className="text-gray-400 text-sm">
                {relativeTimeFromNow(created)}
              </Text>
            </View>
            <View className="flex-row space-x-1">
              <AntDesign name="tagso" size={18} color="#9ca3af" />
              {tags.map((tag, index) => (
                <Text key={index} className="text-gray-400 text-sm">
                  {tag}
                  {index == tags.length - 1 ? '' : ' |'}
                </Text>
              ))}
            </View>
          </View>

          <Tag>{category.name}</Tag>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default HomeListItem
