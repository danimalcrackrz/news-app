import { View, Text, FlatList } from 'react-native'
import Article from '../components/Article'
import { useRecoilValue } from 'recoil'
import { NEWSSTATE } from '../atoms'

const Newslist = () => {
  const articleList = useRecoilValue(NEWSSTATE)
  return (
    <View className='p-2 flex-shrink'>
      <Text className='text-blue-600 text-4xl font-bold capitalize mb-2'>
        top stories
      </Text>
      <FlatList
        className=''
        data={articleList}
        renderItem={({ item }) => <Article {...item} />}
        keyExtractor={(item) => item.created_date}
      />
    </View>
  )
}

export default Newslist
