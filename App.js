import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import Newsscreen from './screens/Newsscreen'
import Scoresscreen from './screens/Scoresscreen'
import Discoverscreen from './screens/Discoverscreen'
import Favoritesscreen from './screens/Favoritesscreen'
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
              tabBarActiveTintColor: 'red',
              tabBarStyle: {
                backgroundColor: '#18181b',
                borderTopWidth: 0,
              },
              tabBarLabelStyle: { fontSize: 12, fontWeight: 700 },
            }}>
            <Tab.Screen
              name='News'
              options={{
                tabBarLabel: 'News',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name='newspaper-variant-outline'
                    size={30}
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
                    size={30}
                    color='white'
                  />
                ),
              }}
              component={Scoresscreen}
            />
            <Tab.Screen
              name='Favorites'
              options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: () => (
                  <MaterialCommunityIcons name='star' size={30} color='white' />
                ),
              }}
              component={Favoritesscreen}
            />
            <Tab.Screen
              name='Discover'
              options={{
                tabBarLabel: 'Discover',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name='compass'
                    size={30}
                    color='white'
                  />
                ),
              }}
              component={Discoverscreen}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </RecoilRoot>
    </NavigationContainer>
  )
}
