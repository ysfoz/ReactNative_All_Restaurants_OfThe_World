
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text,FlatList } from 'react-native';

import { CityCard, SearchBar } from '../components'

let OriginalList  = []
const CityList = (props)=>{
    const[cityList,setCityList] = useState([])

    const fetchCityData = async () =>{
     const {data} = await Axios.get('https://opentable.herokuapp.com/api/cities')  
     setCityList(data.cities) // {data} bu yazim ile ulasilan yerdiki verinin direk olarak
     //data property sine ulasiyoruz. ayni seyi response.data.cities diyerek yapmamis oluyoruz.
    OriginalList = [...data.cities]
    }


useEffect(()=>{
    fetchCityData()
}, [])

function search(value) {
    const filtered = OriginalList.filter(city=>{
        const text = value.toUpperCase()
        const cityName = city.toUpperCase()

        return cityName.indexOf(text) > -1
    })
    setCityList(filtered)
    
}

const renderItemfonc = ({item}) => <CityCard 
                        cityName={item} 
                        index = {cityList.indexOf(item)}
                        onSelect = {()=> props.navigation.navigate('Restaurants',{selectedCity:item})}
                        />
    return(

        <SafeAreaView style= {{flex:1}}>
            <View style={{flex:1}}>
            <SearchBar
            placeholder = 'Enter a city name ➢ ➢ ➢'
            onSearch = {search}
            />
            <FlatList
            keyExtractor ={(_,index) => index.toString()}
            data = {cityList}
            renderItem={renderItemfonc}
            />

            </View>
        </SafeAreaView>
    )
}

export { CityList }