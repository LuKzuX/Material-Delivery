import { ip } from '../../getIp.js'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'

export default function ProductList({ data }) {
  const renderItem = ({ item }) => (
    <ScrollView className='flex-1 p-7 bg-white'>
      <Image
        source={{ uri: `http://${ip}:5000/` + item.productImage }}
        className='h-[150px] object-cover'
      />
      <View className='mt-[5px] flex-row justify-between'>
        <Text className='text-2xl'>{item.productName}</Text>
        <View className='flex-row items-center'>
          <Text className='text-lg mr-[1px]'>$</Text>
          <Text className='text-2xl'>{item.productPrice}</Text>
        </View>
      </View>
      <Text
        className='self-center bg-bg-yellow py-[6px] px-[30px] rounded-xl mt-[10px]'
        onPress={() => console.log(item.productImage)}
      >
        Add to Cart
      </Text>
    </ScrollView>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      numColumns={2}
    />
  )
}
