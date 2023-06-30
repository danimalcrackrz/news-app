import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Homescreen from './screens/Homescreen'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaView className='bg-zinc-900 flex-1'>
          <Homescreen />
        </SafeAreaView>
      </NavigationContainer>
    </RecoilRoot>
  )
}
