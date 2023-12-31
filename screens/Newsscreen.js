import { View } from 'react-native'
import { useEffect } from 'react'
import Newslist from '../components/Newslist'
import { useRecoilState } from 'recoil'
import { NEWSSTATE } from '../atoms'
import { NY_TIMES_API_KEY } from '@env'

//The possible section value are: arts, automobiles, books/review, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world. *** use Home to get articles from the home page.***

const Newsscreen = () => {
  const [articles, setArticles] = useRecoilState(NEWSSTATE)

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NY_TIMES_API_KEY}`
      )
      const { results } = await res.json()
      setArticles(results)
    }
    getArticles()
  }, [])

  return (
    <View className='bg-zinc-900'>
      <Newslist />
    </View>
  )
}

export default Newsscreen
