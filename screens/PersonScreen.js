import { View, Text ,ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,Image} from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import MovieList from '../components/MovieList'

var{width,height} = Dimensions.get('window')
export default function PersonScreen() {
  const[isFavorite, toggleFavorite] = useState(false)
  const[personMovies,setPersonMovies]=useState([1,2,3,4,5])
  const navigation = useNavigation()
  return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={{paddingBottom:20}}>
      <SafeAreaView style={styles.innerContainer}>
        <TouchableOpacity 
        style={styles.icon}
        onPress={()=> navigation.goBack()} >
          <ChevronLeftIcon size={28} strokeWidth={2.5} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>toggleFavorite(!isFavorite)}>
          <HeartIcon size={35} color={isFavorite?'red':'white'}/>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={{
                
        
               
      }}>
        <View style={styles.imageOuterContainer}>
          <View style={styles.imageContainer}>
          <Image
          source={require('../assets/castImage2.png')}
          style={{
            height:height*0.43,
            width:width*0.74
          }}/>
          </View>
        
        </View>
        <View style={{marginTop:24}}>
          <Text style={styles.name}>
            Keanu Reaves
          </Text>
          <Text style={styles.location}>
            London, United Kingdom
          </Text>
        </View>
        <View style={styles.personalInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Gender</Text>
            <Text style={styles.text2}>Male</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Birthday</Text>
            <Text style={styles.text2}>1964-12-19</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Known for</Text>
            <Text style={styles.text2}>Acting</Text>
          </View>
          <View style={styles.lastInfoContainer}>
            <Text style={styles.text}>Popularity</Text>
            <Text style={styles.text2}>64.23</Text>
          </View>

        </View>
        <View style={{
          marginVertical:24,
          marginHorizontal:16,
        }}> 
          <Text style={{fontSize:18,color:"white"}}>Biography</Text>
          <Text style={{color:Colors.txneutral400}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada ultricies erat eu commodo. In aliquam egestas erat, at laoreet justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce non consectetur neque. Duis in lobortis ipsum. Nulla quis ipsum aliquet, dapibus enim non, ullamcorper tortor. Pellentesque volutpat volutpat iaculis. Mauris in efficitur libero, in porta nisl. In vitae magna iaculis, interdum felis a, sollicitudin nibh. Nam mauris ligula, tempor vitae magna ac, mollis egestas tortor. Mauris et tempor quam.
         </Text>
        </View>
        <MovieList title='Movies' hideSeeAll={true} data={personMovies}/>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.bgneutral900
  },
  innerContainer:{
    marginTop:50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:16,
    paddingRight:16,
    zIndex:20
  },
  icon:{
    backgroundColor:Colors.yellow,
    borderRadius:10,
    padding:4
  },
  imageContainer:{
    alignItems:'center',
    borderRadius:9999,
    height:288,
    width:288,
    overflow:'hidden',
    borderWidth:2,
    borderColor:Colors.bdneutral500,
    

  },
  imageOuterContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },
  name:{
    color:Colors.white,
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center"
  },
  location:{
    fontSize:16,
    color:Colors.bdneutral500,
    textAlign:"center"
  },
  personalInfo:{
    flexDirection:"row",
    
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#404040',
    marginTop:16,
    padding:16,
    borderRadius:32

  },
  infoContainer:{
    borderRightWidth:2,
    borderRightColor:Colors.bdneutral500,
    alignItems:"center",
    paddingHorizontal:16
    
    
    
    
  },
  lastInfoContainer:{
    paddingHorizontal:16,
    alignItems:"center"   
  },
  text:{
    color:Colors.white,
    fontWeight:"700"
  },
  text2:{
    fontSize:14,
    color:Colors.txneutral300
  }

})