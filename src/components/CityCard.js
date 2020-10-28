import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const CityCard = (props) => {
    return (
        <TouchableOpacity 
        style={[styles.container,{backgroundColor: props.index % 2 == 0 ? '#ede7f6' : '#fbe9e7'}]}
        onPress = {props.onSelect}
        >
            <Text style={styles.text}>
                
                {props.cityName}
                {props.index % 2 == 0 ? '➢' :'➤' }</Text>
        </TouchableOpacity>
        
    )
}

export  {CityCard};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:10,
        borderBottomWidth:3,
        borderTopWidth:3,
        borderTopColor:'#212121',
        borderBottomColor:'#b0bec5',
        borderLeftWidth:60,
        borderRightWidth:60,
        borderLeftColor:'#1c313a',
        borderRightColor:'#1c313a'
       
        
       
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
        
        
    }
})
