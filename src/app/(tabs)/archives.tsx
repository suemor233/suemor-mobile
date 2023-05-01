import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import ArchiveItem from '~/components/in-page/Archive/item'
import { useGetArchives } from '~/services/queries/archives'

const TabArchivesScreen = () => {
  const archives = useGetArchives()

  if (archives.isLoading) {
    return (
      <View className="h-full justify-center items-center">
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <View className="h-full">
      <FlatGrid
        itemDimension={180}
        spacing={6}
        data={archives.data?.posts}
        renderItem={({ item }) => <ArchiveItem {...item} />}
        onRefresh={() => archives.refetch()}
        refreshing={false}
      />
    </View>
  )
}

export default TabArchivesScreen
