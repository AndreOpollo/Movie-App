import{View,Text,StyleSheet, ScrollView, TouchableOpacity,Image} from 'react-native'
import Colors from '../constants/Colors'
export default function Cast({cast,navigation}){
    let characterName = 'John Wick'
    let personName = 'Keanu Reaves'
    return(
        <View style={styles.container}>
     <Text style={styles.title}>Top Cast</Text>
     <ScrollView
     horizontal
     contentContainerStyle={{paddingHorizontal:15}}
     showsHorizontalScrollIndicator={false}>
        {
            cast && cast.map((person,index)=>{
                return(
                    <TouchableOpacity
                    key={index}
                    style={{marginRight:14,alignItems:"center"}}
                    onPress={()=>navigation.navigate('Person',person)}>
                        <View style={styles.imageContainer}>
                            <Image
                            source={require('../assets/castImage2.png')}
                            style={styles.image}
                            />
                        </View>
                        <Text style={styles.characterName}>
                            {
                            characterName.length>10?characterName.slice(0,10)+'...':characterName
                            }
                        </Text>
                        <Text style={styles.personName}>
                            {
                                personName.length>10?personName.slice(0,10)+'...':personName
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }

     </ScrollView>
    </View>
    )

}
const styles = StyleSheet.create({
    container:{
        marginVertical:24
    },
    title:{
        color:Colors.white,
        fontSize:18,
        marginHorizontal:16,
        marginBottom:20
    },
    characterName:{
        color:Colors.white,
        marginTop:4,
        fontSize:12
    },
    personName:{
        color:Colors.txneutral400,
        marginTop:4,
        fontSize:12
    },
    image:{
        height:96,
        width:80,
        borderRadius:16
    },
    imageContainer:{
        height:80,
        width:80,
        overflow:"hidden",
        borderRadius:9999,
        alignItems:"center",
        color:Colors.bdneutral500
    }

})