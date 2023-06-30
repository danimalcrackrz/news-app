import { View, Text, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const Article = ({ title, multimedia, published_date, byline }) => {
  const [isBookmark, setBookmark] = useState(false)
  return (
    <View className='mt-1 mb-1 rounded-lg overflow-hidden'>
      <Image className='h-60' src={multimedia[0].url} />
      <View className='p-2 flex-col gap-3'>
        <Text className='text-white text-xl font-semibold'>{title}</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row items-center'>
            <Text className='text-white'>
              {moment(published_date)
                .fromNow()
                .replace('hours', 'h')
                .replace('minutes', 'm')
                .replace('seconds', 'sec')
                .replace(' ', '')}
            </Text>
            <Entypo name='dot-single' size={14} color='white' />
            <Text className='text-white italic'>
              {byline ? byline.replace('By ', '') : 'New York Times'}
            </Text>
          </View>
          <View className='flex-row gap-6'>
            <Ionicons name='ios-share-outline' size={26} color='white' />
            {isBookmark ? (
              <TouchableOpacity onPress={() => setBookmark(!isBookmark)}>
                <Text>
                  <Ionicons name='md-bookmark' size={26} color='red' />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setBookmark(!isBookmark)}>
                <Text>
                  <Ionicons
                    name='md-bookmark-outline'
                    size={26}
                    color='white'
                  />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Article
