import {  Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabCreate() {
  return (
    <SafeAreaView style={{ flex:1 }}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>create</Text>
    </View>
    </SafeAreaView>
  )
}
