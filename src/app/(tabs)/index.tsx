import { View, Text } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router';

const TabHomeScreen = () => {
  const pathname = usePathname();
  return (
    <View>
      <Text>TabHomeScreen</Text>
    </View>
  )
}

export default TabHomeScreen