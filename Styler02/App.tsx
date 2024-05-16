import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
         <FlatCards/>
         <ElevatedCards/>
         <FancyCard/>
         <ContactList/>
         <ActionCard/>
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App