import React from 'react'
import { View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import ArchiveItem from '~/components/Archive/item'
import { useGetArchives } from '~/services/queries/archives'

const TabArchivesScreen = () => {
  const archives = useGetArchives()
  return (
    <View className="h-full">
      {/* {archives.data?.posts.map((post) => (
        <ArchiveItem key={post._id} {...post} />
      ))} */}
      <FlatGrid
        itemDimension={180}
        data={archives.data?.posts}
        renderItem={({ item }) => <ArchiveItem {...item} />}
      />
    </View>
  )
}

export default TabArchivesScreen
