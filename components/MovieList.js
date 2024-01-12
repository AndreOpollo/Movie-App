import{View,Text,StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, Image} from 'react-native'
import Colors from '../constants/Colors'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

var{width,height}=Dimensions.get('window')
export default function MovieList({title, data}){
    const navigation = useNavigation()
    const handleClick = ()=>{
        navigation.navigate('Movie',item)
    }
    let movieName = 'Ant-Man and the Wasp: Quantamania'
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
            </View>
            <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal:16}}
            showsHorizontalScrollIndicator={false}>
                
            {
                data.map((item,index)=>{
                    return(
                        <TouchableWithoutFeedback
                        key={index}
                        onPress={handleClick}>
                            <View style={styles.upcomingContainer}>
                            <Image
                            source={require('../assets/moviePoster2.png')}
                            style={{
                                height:height*0.22,
                                width:width*0.33,
                                borderRadius:16,
                                marginTop:4
                            }}/>
                            <Text style={{color:Colors.txneutral300,marginLeft:4}}>
                        {
                        movieName.length>14? movieName.slice(0,14)+'...':movieName
                    }
                        </Text>
                            </View>
                           
                        

                        </TouchableWithoutFeedback>
                        
                )
                })
            }

            </ScrollView>
            
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        marginBottom:32,
        marginTop:16

    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:16,
        marginRight:16
    },
    title:{
        color:Colors.white,
        fontSize:20
    },
    seeAll:{
        color:Colors.yellow,
        fontSize:18
    },
    upcomingContainer:{
        marginTop:4,
        marginRight:16
    },
    image:{
        borderRadius:16
    }
})