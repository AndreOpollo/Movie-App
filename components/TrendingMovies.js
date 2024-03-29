import{View,Text,StyleSheet, TouchableWithoutFeedback, Dimensions, Image} from 'react-native'
import Colors from '../constants/Colors'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../api/moviedb'

var{width,height} = Dimensions.get('window')
export default function TrendingMovies({data}){
    const navigation = useNavigation()
    const handleClick=(item)=>{
        navigation.navigate('Movie',item)
    }
    return(
        <View style={styles.container}>
        <Text style={styles.trending}>Trending</Text>
        <Carousel
        data={data}
        renderItem={({item})=>(
            <MovieCard item={item} handleClick={()=>handleClick(item)}/>
        )}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display:"flex", alignItems:"center"}}/>
    </View>
    )

}


const MovieCard=({item,handleClick})=>{
    console.log(item.poster_path)
    return(
      
        <TouchableWithoutFeedback onPress={handleClick}>
       <Image
       source={{uri:image500(item.poster_path)}}
       style={{
        height:height*0.42,
        width:width*0.6,
        borderRadius:24
       }}
       />
    </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        marginBottom:16
    },
    trending:{
        color:Colors.white,
        fontSize:20        
    }
})