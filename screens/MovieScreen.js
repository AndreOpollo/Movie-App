import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect,useState } from 'react'
import {View,Text, ScrollView,StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,Image} from 'react-native'
import Colors from '../constants/Colors'
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import {LinearGradient} from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../api/moviedb'


var{width,height} = Dimensions.get('window')
export default function MovieScreen(){
    
    const[isFavorite, toggleFavorite]=useState(false)
    const[cast,setCast]=useState([])
    const[similarMovies,setSimilarMovies]=useState([])
    const[loading,setLoading]=useState(false)
    const[movie,setMovie]=useState({})
    const {params:item}=useRoute()
    const navigation = useNavigation()
    
    useEffect(()=>{

      setLoading(true)
      getMovieDetails(item.id)
      getCastDetails(item.id)
      getSimilarMovies(item.id)


    },[item])

    const getMovieDetails = async (id)=>{
        const data = await fetchMovieDetails(id)
        if(data){
            setMovie(data)
        }
      
        setLoading(false)
    }
    const getCastDetails = async(id)=>{
        const data = await fetchMovieCredits(id)
        if(data && data.cast){
            setCast(data.cast)
        }
    }
    const getSimilarMovies = async(id)=>{
        const data = await fetchSimilarMovies(id)
        if(data && data.results){
            setSimilarMovies(data.results)
        }
    }
  return(
        <ScrollView
        contentContainerStyle={{paddingBottom:20}}
        style={styles.scrollView}>
            {
                loading?(
                    <Loading/>

                ):(
                    <View>
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
                               // source={require('../assets/moviePoster2.png')}
                               source={{uri:image500(movie?.poster_path)}}
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
                            {movie?.original_title}
                        </Text>
                        <Text style={styles.movieInfo}>
                            {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
                        </Text>
                    </View>
                    {/*genres */}
                    <View style={styles.genreContainer}>
                        {
                            movie?.genres?.map((genre,index)=>{
                                let showdot = index+1 !=movie.genres.length
                                return(
                                    <Text key={index} style={styles.movieInfo}>
                                    {genre?.name} {showdot?'•':null} 
                                    </Text>

                                )
                            })
                        }

                       
                        
                        
        
                    </View>
                    {/* Description */}
                    <Text style={styles.description}>
                       {movie?.overview}
                    </Text>
                    <Cast navigation={navigation}cast={cast}/>
                    <MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies}/>
                    </View>
                )
            }
       
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