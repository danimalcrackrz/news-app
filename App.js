import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import Newsscreen from './screens/Newsscreen'

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <SafeAreaView className='bg-zinc-900 flex-1'>
          <Newsscreen />
        </SafeAreaView>
      </RecoilRoot>
    </NavigationContainer>
  )
}
