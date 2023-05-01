import React, { useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'

import HomeListItem from '~/components/in-page/Home/ListItem'
import { useGetPostInfiniteQuery } from '~/services/queries/posts'
import type { postItemType } from '~/services/types/post'

const TabHomeScreen = () => {
  const { data, fetchNextPage, remove } = useGetPostInfiniteQuery()

  const postList = useMemo<postItemType[]>(
    () =>
      data?.pages?.reduce(
        (acc, page) => [...acc, ...(page?.postList || [])],
        [],
      ) ?? [],
    [data],
  )

  return (
    <View className="h-full bg-gray-50 dark:bg-black">
      <FlatList
        data={postList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeListItem {...item} />}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View className="h-full justify-center items-center">
            <Text>loading...</Text>
          </View>
        }
        onRefresh={() => {
          remove()
          fetchNextPage()
        }}
        refreshing={false}
      />
    </View>
  )
}

export default TabHomeScreen
