import { StatusBar } from 'expo-status-bar'
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { API_URL } from '@env'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text className='text-red-400'>
          Open up App.js to start working on your app! {API_URL}
        </Text>
        <StatusBar style='auto' />
      </SafeAreaView>
    </NavigationContainer>
  )
}
