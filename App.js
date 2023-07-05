import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import Newsscreen from './screens/Newsscreen'
import Sportsscreen from './screens/Sportsscreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <SafeAreaView className='flex-1 bg-zinc-900'>
          <Tab.Navigator
            initialRouteName='News'
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#08fdd8',
              tabBarStyle: { backgroundColor: '#18181b' },
            }}>
            <Tab.Screen
              name='News'
              options={{
                tabBarLabel: 'News',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name='newspaper-variant-outline'
                    size={24}
                    color='white'
                  />
                ),
              }}
              component={Newsscreen}
            />
            <Tab.Screen
              name='Settings'
              options={{
                tabBarLabel: 'Scores',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name='scoreboard-outline'
                    size={24}
                    color='white'
                  />
                ),
              }}
              component={Sportsscreen}
            />
            <Tab.Screen
              name='Favorites'
              options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: () => (
                  <MaterialCommunityIcons name='star' size={24} color='white' />
                ),
              }}
              component={Sportsscreen}
            />
            <Tab.Screen
              name='Discover'
              options={{
                tabBarLabel: 'Discover',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name='compass'
                    size={24}
                    color='white'
                  />
                ),
              }}
              component={Sportsscreen}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </RecoilRoot>
    </NavigationContainer>
  )
}
