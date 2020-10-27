import React from 'react';
import {  View, TextInput, StyleSheet } from 'react-native';

const SearchBar =(props)=>{
    return(
        <View style = {styles.container}>
            <TextInput
            style={styles.textinput}
            placeholder = {props.placeholder}
            onChangeText = {(value) => props.onSearch(value)}
            />
        </View>
    )
}

export {SearchBar};

const styles = StyleSheet.create({
    container:{
       
        backgroundColor:'#cfd8dc',
        padding:10,
        borderRadius:10,
        margin:10,
  
    },
    textinput:{
fontSize:20
    }
})