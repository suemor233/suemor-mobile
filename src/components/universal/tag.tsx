import type { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

type TagProps = PropsWithChildren

const Tag: FC<TagProps> = ({ children }) => {
  return (
    <View className="px-1 bg-gray-100 dark:bg-zinc-800 inline-block">
      <Text className="text-sm text-blue-400 dark:text-blue-400">{children}</Text>
    </View>
  )
}

export default Tag
