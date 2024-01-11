import {View,Text,SafeAreaView,StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import Colors from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { useState } from 'react'
import TrendingMovies from '../components/TrendingMovies'

export default function HomeScreen(){
    const[trending, setTrending]=useState([1,2,3,4])

    return(
        <View style={styles.container}>
            {/* search and logo */}
            <SafeAreaView style={styles.innerContainer}>
                <StatusBar style='light'/>
                <View style={styles.logosearchContainer}>
                   <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white"/>
                   <Text style={styles.moviesText}>
                    <Text style={{color:Colors.yellow}}>M</Text>ovies
                    </Text>
                   <TouchableOpacity>
                    <MagnifyingGlassIcon size={30}strokeWidth={2} color="white"/>
                   </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
             showsVerticalScrollIndicator={false}
             contentContainerStyle={{padding:10}}>
            
               <TrendingMovies data={trending}/>
               

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bgneutral800

    },
    innerContainer:{
        marginTop:50
    },
    logosearchContainer:{
        flexDirection:"row",
        marginHorizontal:16,
        justifyContent:"space-between",
        alignItems:"center"
    },
    moviesText:{
        color:Colors.white,
        fontWeight:"bold",
        fontSize:30
    }
})