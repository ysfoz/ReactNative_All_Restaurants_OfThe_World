import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image, Dimensions } from 'react-native';



// address: "331 Richland Ave."
// area: "Columbus"
// city: "Athens"
// country: "US"
// id: 38140
// image_url: "https://www.opentable.com/img/restimages/38140.jpg"
// lat: 39.317076
// lng: -82.106055
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=38140"
// name: "Cutler's"
// phone: "7405936661"
// postal_code: "45701"
// price: 2
// reserve_url: "http://www.opentable.com/single.aspx?rid=38140"
// state: "OH"

const RestaurantCard = (props) =>{
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={props.onSelect}
        >
            <Image
            style={styles.image}
            source={{ uri: props.restaurant.image_url }}
            />
            <Text style={styles.text}>{props.restaurant.name}</Text>


        </TouchableOpacity>
    )
}

export {RestaurantCard};

const styles = StyleSheet.create({
    container:{
        
        borderWidth:20,
        marginBottom:10,
        borderRadius:15,
        borderColor:'#ffbb93',

    },
    text:{
        fontSize:22,
        backgroundColor:'#ffbb93',
        fontWeight:'bold',
        padding:10,
        marginTop:10
    },
    image:{
       height:Dimensions.get('window').height/ 4,  
     
    },
})