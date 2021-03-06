import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Card = (props) => (
    <View style={styles.container}>
        {props.children}
        
    </View>
    )
export default Card;

const styles = StyleSheet.create({
    container: {
       borderWidth:1,
       borderRadius:2,
       borderColor:'#dddd',
       borderBottomWidth:0,
       shadowColor:'#000',
       shadowOffset:{width:0,height:2},
       shadowOpacity:0.5,
       shadowRadius:2,
       elevation:1,
       marginLeft:5,
       marginRight:5,
       marginTop:10,


    }
});