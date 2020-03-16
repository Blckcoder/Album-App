import React from "react";
import {
    View,
    Text,
    StyleSheet,Image, Linking 
} from "react-native";
import Card from './Card';
import CardSection from './CarsSection';
import Button from './Button';

const AlbumDetail = (props) => (
    <Card>
        <CardSection>
            <View style={styles.imageContainer}>
                <Image style={styles.thumbnailStyle}
                    source={{ uri: props.record.thumbnail_image }} />

            </View>


            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{props.record.title}</Text>
                <Text> {props.record.artist}</Text>
            </View>
         </CardSection>

         <CardSection>

        <Image style={styles. imageStyle}
        
        source={{uri: props.record.image}} />

         </CardSection>
         
         <CardSection>
             <Button onPress={ ()=>Linking.openURL(props.record.url)}>Buy Now</Button>
         </CardSection>



    </Card>



)
export default AlbumDetail;

const styles = StyleSheet.create({
   
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18,


    },
    thumbnailStyle:{
        height:50,
        width:50,

    },
   
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10

    },
    imageStyle:{
        height:300,
        flex:1,
        width:null

       

    },

});