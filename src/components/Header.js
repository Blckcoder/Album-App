//import a library to creat components//
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


//creating a component//
const Header = (props) => (
    <View style={styles.container}>


        {/* adding props to components */}
        {/* making dynamic use of the component using (props) object */}
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>

)


//export so that other components can also use this component//
export default Header;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        //    shadow property not working
        shadowColor: '#000',
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
 }
});