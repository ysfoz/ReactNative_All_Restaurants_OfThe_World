import React from 'react';
import {  View, TextInput, StyleSheet } from 'react-native';

const SearchBar =(props)=>{
    return(
        <View style = {styles.container}>
            <TextInput
            style={styles.textinput}
            placeholder = {props.placeholder}
            onChangeText = {(value) => props.onSearch(value)}
            placeholderTextColor="#455a64"
            />
        </View>
    )
}

export {SearchBar};

const styles = StyleSheet.create({
    container:{
       
        backgroundColor:'#eceff1',
        padding:10,
        borderRadius:10,
        
  
    },
    textinput:{
        fontSize:20,
        
    }
})