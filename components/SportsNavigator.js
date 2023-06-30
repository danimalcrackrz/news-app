import { ScrollView, Text, TouchableOpacity } from 'react-native'

const Sportsnavigator = () => {
  const sports = [
    { name: 'All', to: '/' },
    { name: 'NFL', to: '/nfl' },
    { name: 'NBA', to: '/nba' },
    { name: 'F1', to: '/f1' },
    { name: 'MLB', to: '/mlb' },
    { name: 'NHL', to: '/nhl' },
    { name: 'PGA', to: '/pga' },
    { name: 'NASCAR', to: '/nascar' },
    { name: 'MMA', to: '/mma' },
    { name: 'WNBA', to: '/wnba' },
    { name: 'MLS', to: '/mls' },
  ]

  return (
    <ScrollView
      horizontal
      className=' bg-zinc-900'
      contentContainerStyle={{
        flex: 1,
        gap: 40,
        justifyContent: 'space-between',
        padding: 10,
      }}>
      {sports.map((sport, i) => (
        <TouchableOpacity key={i} className=''>
          <Text className='text-gray-200 font-semibold'>{sport.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Sportsnavigator
