import { Stack, useSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import WebView from 'react-native-webview'

import { useGetPostById } from '~/services/queries/posts'

const PostScreen = () => {
  const { id } = useSearchParams<{ id: string }>()
  const post = useGetPostById(id)

  if (post.isLoading) {
    return (
      <>
        <Stack.Screen options={{ title: 'loading....' }} />
        <View className="h-full justify-center items-center">
          <ActivityIndicator />
        </View>
      </>
    )
  }

  return (
    <>
      <Stack.Screen options={{ title: post.data?.post.title }} />
      <WebView
        source={{ uri: `https://beta.suemor.com/posts/${id}` }}
        style={{ flex: 1 }}
      />
    </>
  )
}

export default PostScreen
