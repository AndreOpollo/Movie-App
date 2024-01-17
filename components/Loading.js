import { View,Text, Dimensions, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';
import Colors from "../constants/Colors";

var{width,height}=Dimensions.get('window')
export default function Loading(){
    return (
        <View style={styles.container}>
            <Progress.CircleSnail thickness={12} size={160} color={Colors.yellow}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:height,
        width:width
    }
})