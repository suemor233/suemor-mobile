import { Stack, useSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display'

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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className='p-2'
      >
        {/* @ts-ignore */}
        <Markdown style={{
          // text:{
          //   color:'white'
          // }
        }}>{post.data?.post?.content}</Markdown>
      </ScrollView>
    </>
  )
}

export default PostScreen
