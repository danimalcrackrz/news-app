import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Homescreen from './screens/Homescreen'
import { API_URL } from '@env'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Homescreen />
      </SafeAreaView>
    </NavigationContainer>
  )
}
