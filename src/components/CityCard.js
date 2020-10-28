import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const CityCard = (props) => {
    return (
        <TouchableOpacity 
        style={[styles.container,{backgroundColor: props.index % 2 == 0 ? '#ffffe4' : '#e2f1f8'}]}
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
        borderBottomWidth:2,
        borderBottomColor:'#fffffb',
       
        
       
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
        
        
    }
})
