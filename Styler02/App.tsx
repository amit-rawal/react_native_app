import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
         <FlatCards/>
         <ElevatedCards/>
         <FancyCard/>
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App