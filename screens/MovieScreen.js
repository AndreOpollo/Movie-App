import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect,useState } from 'react'
import {View,Text, ScrollView,StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,Image} from 'react-native'
import Colors from '../constants/Colors'
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import {LinearGradient} from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'

var{width,height} = Dimensions.get('window')
export default function MovieScreen(){
    let movieName = 'Ant-Man and the Wasp: Quantamania'
    const[isFavorite, toggleFavorite]=useState(false)
    const[cast,setCast]=useState([1,2,3,4,5])
    const[similarMovies,setSimilarMovies]=useState([1,2,3,4,5])
    const {params:item}=useRoute()
    const navigation = useNavigation()
    
    useEffect(()=>{
        //Make API call
    },[item])
  return(

        <ScrollView
        contentContainerStyle={{paddingBottom:20}}
        style={styles.scrollView}>
            <View style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}style={styles.icon}>
                        <ChevronLeftIcon size={30} strokeWidth={2.5} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>toggleFavorite(!isFavorite)}>
                        <HeartIcon size={35} color={isFavorite?Colors.yellow:"white"}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                    source={require('../assets/moviePoster2.png')}
                    style={{
                        width:width,
                        height:height*0.52
                    }}/>
                    <LinearGradient
                    colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                    style={{
                        width:width,
                        height:height*0.4,
                        position:"absolute",
                        bottom:0
                    }}
                    start={{x:0.5,y:0}}
                    end={{x:0.5,y:1}}/>
                </View>

            </View>
            {/* Movie Details */}
            <View style={styles.movieContainer}>
                <Text style={styles.movieTitle}>
                    {movieName}
                </Text>
                <Text style={styles.movieInfo}>
                    Released • 2020 • 170 min
                </Text>
            </View>
            {/*genres */}
            <View style={styles.genreContainer}>
                <Text style={styles.movieInfo}>
                Action • 
                </Text>
                <Text style={styles.movieInfo}>
                Thrill • 
                </Text>
                <Text style={styles.movieInfo}>
                    Comedy
                </Text>
                

            </View>
            {/* Description */}
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada ultricies erat eu commodo. In aliquam egestas erat, at laoreet justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce non consectetur neque. Duis in lobortis ipsum. Nulla quis ipsum aliquet, dapibus enim non, ullamcorper tortor. Pellentesque volutpat volutpat iaculis. Mauris in efficitur libero, in porta nisl. In vitae magna iaculis, interdum felis a, sollicitudin nibh. Nam mauris ligula, tempor vitae magna ac, mollis egestas tortor. Mauris et tempor quam.
               
            </Text>
            <Cast navigation={navigation}cast={cast}/>
            <MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies}/>

        </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        backgroundColor: Colors.bgneutral900
    },
    container:{
        width:"100%"
    },
    innerContainer:{
        flexDirection:"row",
        zIndex:20,
        justifyContent:"space-between",
        alignItems:"center",
        width:width,
        position:"absolute",
        paddingLeft:16,
        paddingRight:16,
        marginTop:50,
        
    },
    icon:{
        backgroundColor:Colors.yellow,
        borderRadius:10,
        padding:4
    },
    movieContainer:{
        marginTop:-(height*0.06)

    },
    movieTitle:{
        color:Colors.white,
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        letterSpacing:0.05

    },
    movieInfo:{
        fontSize:16,
        fontWeight:"500",
        color:Colors.txneutral400,
        textAlign:"center",
        padding:16
    },
    genreContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginLeft:16,
        marginRight:16
    },
    description:{
        marginRight:16,
        marginLeft:16,
        color:Colors.txneutral400
    }

})