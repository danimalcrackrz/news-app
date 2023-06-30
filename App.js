import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import NewsScreen from './screens/NewsScreen'

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <SafeAreaView className='bg-zinc-900 flex-1'>
          <NewsScreen />
        </SafeAreaView>
      </RecoilRoot>
    </NavigationContainer>
  )
}
