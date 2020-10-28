import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Linking } from 'react-native';

import { Button } from '../components';



const InfoList = (props)=>{

const Info = props.route.params.selectedRest

function goUrl () {
    Linking.openURL(Info.reserve_url)
}
{/* <TouchableHighlight
                onPress={() => {
                  Linking.openURL(footballer.url);
                }}
              > */}

    return(
        <SafeAreaView>
            <View>
                <Image
                style = {styles.image}
                source = {{uri:Info.image_url}}
                />
                <Text style = {styles.price}>{Info.price <= 2 ? '$': '$$$'}</Text>
                </View>

                <View>
    
    <Button
    value1 = {Info.name}
    />
    <Button 
    value1 = {Info.city}
    value2 = {Info.country}
    />
    <Button 
    value1 = {Info.address}
    />
    <Button 
    value1 = 'Go to  Website ➤ ➤ ➤'
    backgroundcolor = '#ff7539'
    url = {goUrl}
    />
            </View>
        </SafeAreaView>
    )
}

export { InfoList }

const styles = StyleSheet.create({
    container:{

    },
    image:{
        height:Dimensions.get('window').height / 3,
        borderWidth:10,
        borderColor:'#ff7961'

    },
    price:{
        position:'absolute',
        left:340,
        top:250,
        fontSize:30,
        fontWeight:'bold',
        color:'green'
    }
})