import {View,Text, Dimensions, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image} from 'react-native'
import Colors from '../constants/Colors'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import Loading from '../components/Loading'
import { fallbackMoviePoster, image185, searchMovie } from '../api/moviedb'
import {debounce} from 'lodash'

var{width,height}=Dimensions.get('window')
export default function SearchScreen(){
    const[results,setResults]=useState([])
    const[loading,setLoading]=useState(false)
    const navigation = useNavigation()
    let movieName = 'Ant-Man and the Wasp: Quantamania'
    const handleSearch = (value)=>{
        if(value && value.length>2){
            setLoading(true)
            searchMovie(
                {
                    query:value,
                    include_adult:'false',
                    language:'en-US',
                    page:'1'

                }
            ).then(data=>{
                setLoading(false)
                if(data&&data.results){
                    setResults(data.results)
                }else{
                    setResults({})
                }
            })
        }
    }
    const handleTextDebounce = useCallback(debounce(handleSearch,400),[])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                onChangeText={handleTextDebounce}
                placeholder='Search Movie'
                placeholderTextColor={'lightgray'}
                style={styles.search}/>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                style={styles.iconContainer}>
                    <XMarkIcon size={24} color={'white'}/>
                </TouchableOpacity>
            </View>
            {/* results */}


            {
                loading?(
                    <Loading/>
                ):(
                    results.length>0?(
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal:15}}
                        style={{
                            marginTop:12
                        }}
                        >
                            <Text style={styles.resultTitle}>Results ({results.length})</Text>
                            <View style={styles.resultContainer}>
                                {
                                    results.map((item,index)=>{
                                        return(
                                            <TouchableWithoutFeedback
                                            onPress={()=>navigation.navigate('Movie',item)}
                                            key={index}>
                                                
                                                <View style={styles.imageContainer}>
                                                    <Image
                                                    source={{uri:image185(item?.poster_path)||fallbackMoviePoster}}
                                                    style={{
                                                        height:height*0.3,
                                                        width:width*0.42,
                                                        borderRadius:40           }}/>
                                                        <Text style={styles.movieName}>
                                                            {item?.title?.length>20?item?.title?.slice(0,20)+'...':item?.title}
                                                        </Text>
                                                </View>
                
                                            </TouchableWithoutFeedback>
            
                                        )
                                      
                                    })
                                }
            
                            </View>
                            
                        </ScrollView>        
    
                    ):(
                        <View style={styles.placeholderContainer}>
                            <Image
                            style={styles.placeholder}
                            source={require('../assets/movieTime.png')}/>
                        </View>
                    )

                )
                
            }

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bgneutral800
    },
    searchContainer:{
        marginHorizontal:16,
        marginBottom:12,
        flexDirection:"row",
        borderColor:Colors.bdneutral500,
        borderRadius:24,
        marginTop:50,
        borderWidth:1,
        justifyContent:"space-between",
        alignItems:"center"
    },
    search:{
        flex:1,
        paddingVertical:8,
        paddingLeft:24,
        color:Colors.white,
        fontWeight:"600",
        fontSize:16

    },
    iconContainer:{
        padding:12,
        borderRadius:24,
        margin:4,
        backgroundColor:Colors.bdneutral500
    },
    resultTitle:{
        color:Colors.white,
        fontWeight:"700",
        marginLeft:4,
        fontSize:20
    },
    resultContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    imageContainer:{
        marginTop:8,
        marginBottom:16,
        
    },
    movieName:{
        marginLeft:12,
        color:Colors.txneutral400,
        fontSize:16,
        marginTop:4
    },
    placeholderContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    placeholder:{
        height:480,
        width:320
    }
})