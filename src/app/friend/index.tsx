import { Stack, useSearchParams } from 'expo-router'
import WebView from 'react-native-webview'

const FriendScreen = () => {
  const { uri, title } = useSearchParams<{ uri: string; title: string }>()
  return (
    <>
      <Stack.Screen options={{ title }} />
      <WebView source={{ uri: `https://${uri}` }} style={{ flex: 1 }} />
    </>
  )
}

export default FriendScreen
