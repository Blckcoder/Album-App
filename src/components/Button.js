import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const Button = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>

<Text style={styles.textStyle}>{props.children}</Text>

    </TouchableOpacity>

        

    )
export default Button;
 
const styles = StyleSheet.create({
   
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5

    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    }
});