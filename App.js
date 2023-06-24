import { StatusBar } from 'expo-status-bar'
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text className='text-red-400'>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </SafeAreaView>
    </NavigationContainer>
  )
}
