import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'


export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="archives"
        options={{
          title: '归档',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="archive" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
