import React from 'react'
import { FlatList, View } from 'react-native'

import HomeListItem from '@/components/Home/ListItem'

const TabHomeScreen = () => {
  return (
    <View className="h-full bg-gray-50">
      <FlatList
        data={HomeListData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeListItem {...item} />}
      />
    </View>
  )
}

export const HomeListData = [
  {
    time: '2023-04-14',
    title: '让 Tailwind 内置颜色支持暗黑模式',
    tags: ['Tailwind', 'CSS', '黑暗模式'],
    category: '前端',
    content:
      '最近给xLog 增加了黑暗模式的支持，但由于xLog 在开发时候就没对黑暗模式留个口子，比如颜色值不固定写死，或者是使用CSS 变量的颜色值。而xLog 真巧使用了 Tailwind，基本上所有的颜色应用场景都用了 Tailwind 自带的色值，但由于 Tailwind 本身自带的色值都是一个固定的值',
  },

  {
    time: '2023-04-14',
    title: '让 Tailwind 内置颜色支持暗黑模式',
    tags: ['Tailwind', 'CSS', '黑暗模式'],
    category: '前端',
    content:
      '最近给xLog 增加了黑暗模式的支持，但由于xLog 在开发时候就没对黑暗模式留个口子，比如颜色值不固定写死，或者是使用CSS 变量的颜色值。而xLog 真巧使用了 Tailwind，基本上所有的颜色应用场景都用了 Tailwind 自带的色值，但由于 Tailwind 本身自带的色值都是一个固定的值',
  },

  {
    time: '2023-04-14',
    title: '让 Tailwind 内置颜色支持暗黑模式',
    tags: ['Tailwind', 'CSS', '黑暗模式'],
    category: '前端',
    content:
      '最近给xLog 增加了黑暗模式的支持，但由于xLog 在开发时候就没对黑暗模式留个口子，比如颜色值不固定写死，或者是使用CSS 变量的颜色值。而xLog 真巧使用了 Tailwind，基本上所有的颜色应用场景都用了 Tailwind 自带的色值，但由于 Tailwind 本身自带的色值都是一个固定的值',
  },
  {
    time: '2023-04-14',
    title: '让 Tailwind 内置颜色支持暗黑模式',
    tags: ['Tailwind', 'CSS', '黑暗模式'],
    category: '前端',
    content:
      '最近给xLog 增加了黑暗模式的支持，但由于xLog 在开发时候就没对黑暗模式留个口子，比如颜色值不固定写死，或者是使用CSS 变量的颜色值。而xLog 真巧使用了 Tailwind，基本上所有的颜色应用场景都用了 Tailwind 自带的色值，但由于 Tailwind 本身自带的色值都是一个固定的值',
  },

  {
    time: '2023-04-14',
    title: '让 Tailwind 内置颜色支持暗黑模式',
    tags: ['Tailwind', 'CSS', '黑暗模式'],
    category: '前端',
    content:
      '最近给xLog 增加了黑暗模式的支持，但由于xLog 在开发时候就没对黑暗模式留个口子，比如颜色值不固定写死，或者是使用CSS 变量的颜色值。而xLog 真巧使用了 Tailwind，基本上所有的颜色应用场景都用了 Tailwind 自带的色值，但由于 Tailwind 本身自带的色值都是一个固定的值',
  },
]

export default TabHomeScreen
