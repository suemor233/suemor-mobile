import { ActivityIndicator, View } from 'react-native'

const Loading = () => {
  return (
    <View className="h-full justify-center items-center">
      <ActivityIndicator />
    </View>
  )
}

export default Loading
