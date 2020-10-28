import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

import {RestaurantCard,SearchBar} from '../components'


let originalList = []

const RestaurantList = (props)=>{
    const [restaurantList,setRestaurantList] = useState([])

const City = props.route.params.selectedCity // bunu const {selected} = props.route.params
         

const fetchRestaurants = async () => {
   const response = await Axios.get('https://opentable.herokuapp.com/api/restaurants',
                {
                    params:{
                        'city':City
                    }
                })
                setRestaurantList(response.data.restaurants)
                originalList =[...response.data.restaurants]
               
            
} 

useEffect (() => {fetchRestaurants()},[])


const renderRestaurant = ({item})=> {
    
    return(
        <RestaurantCard
        restaurant = {item}
        onSelect = {() => props.navigation.navigate('Infos',{selectedRest:item})}
        />
        )    
    }

    function search(value) {
        const filtered = originalList.filter(rest => {
        const text = value.toUpperCase()
        const resteurantName = rest.name.toUpperCase()
        return resteurantName.indexOf(text) > -1
})
setRestaurantList(filtered)

           
    }
    
    return(
        <SafeAreaView>
            <View>

                <Text style={styles.text}>{City}'s Restaurants</Text>
                <SearchBar
                placeholder = "Enter a Restaurant name ➢ ➢ ➢"
                onSearch = {(value) => search(value)}
                />
                <FlatList
                keyExtractor={(_,index)=> index.toString()}
                data={restaurantList}
                renderItem={renderRestaurant}
                />
                
            </View>
        </SafeAreaView>
    )
}

export { RestaurantList }

const styles = StyleSheet.create({
    text:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'#ff9d3f',
        padding:10,
        color:'#1c313a',
        marginVertical:7,
        

    }
})