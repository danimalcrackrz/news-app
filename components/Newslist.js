import { View, Text, FlatList } from 'react-native'
import Article from '../components/Article'
import { useRecoilValue } from 'recoil'
import { NEWSSTATE } from '../atoms'

const Newslist = () => {
  const articleList = useRecoilValue(NEWSSTATE)
  return (
    <View className='p-4 flex-shrink'>
      <Text className='text-red-600 text-4xl font-bold capitalize mb-4'>
        top stories
      </Text>
      <FlatList
        data={articleList}
        renderItem={({ item }) => <Article {...item} />}
      />
    </View>
  )
}

export default Newslist
