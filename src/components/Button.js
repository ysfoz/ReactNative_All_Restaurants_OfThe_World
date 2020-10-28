import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity 
        style={[styles.container,{backgroundColor:props.backgroundcolor ? props.backgroundcolor:'#82b1ff'}]}
        onPress = {props.url}
        >
            <Text style= {styles.text}>{props.value1}  {props.value2}</Text>
        </TouchableOpacity>
    )
}

export {Button}

const styles = StyleSheet.create({
    container:{
        
        padding:10,
        marginHorizontal:10,
        borderRadius:10,
        marginTop:20
    
    },
    text:{
        fontSize:20,
        
    }
})
