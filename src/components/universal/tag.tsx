import type { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

type TagProps = PropsWithChildren

const Tag: FC<TagProps> = ({ children }) => {
  return (
    <View className="inline-bloc px-1 bg-gray-100">
      <Text className="text-sm text-gray-500">{children}</Text>
    </View>
  )
}

export default Tag
