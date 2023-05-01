import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import HomeListItem from '~/components/Home/ListItem'
import { ApiPost } from '~/services/api/posts'
import type { postItemType } from '~/services/types/post'

const TabHomeScreen = () => {
  const [list, setList] = useState<postItemType[]>([])
  const [pageCurrent, setPageCurrent] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  useEffect(() => {
    handleFetchListData()
  }, [])

  const handleFetchListData = async () => {
    if (!hasMore) return
    const data = await ApiPost.getPostPaginate({ pageCurrent, pageSize: 10 })
    setList((list) => [...list, ...data.postList])
    if (data.totalPages == pageCurrent) {
      setHasMore(false)
    }
    setPageCurrent((pageCurrent) => pageCurrent + 1)
  }

  const handleFreshListData = async () => {
    setList([])
    setPageCurrent(1)
    setHasMore(true)
  }

  return (
    <View className="h-full bg-gray-50 dark:bg-black">
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeListItem {...item} />}
        onEndReached={() => handleFetchListData()}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View className="h-full justify-center items-center">
            <Text>loading...</Text>
          </View>
        }
        onRefresh={handleFreshListData}
        refreshing={false}
      />
    </View>
  )
}

export default TabHomeScreen
