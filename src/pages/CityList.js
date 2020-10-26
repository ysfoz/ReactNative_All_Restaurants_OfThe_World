
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text,FlatList } from 'react-native';

import { CityCard } from '../components'


const CityList = (props)=>{
    const[cityList,setCityList] = useState([])

    const fetchCityData = async () =>{
     const {data} = await Axios.get('https://opentable.herokuapp.com/api/cities')  
     setCityList(data.cities) // {data} bu yazim ile ulasilan yerdiki verinin direk olarak
     //data property sine ulasiyoruz. ayni seyi response.data.cities diyerek yapmamis oluyoruz.
    }


useEffect(()=>{
    fetchCityData()
}, [])

const renderItemfonc = ({item}) => <CityCard cityName={item} index = {cityList.indexOf(item)}/>
    return(

        <SafeAreaView>
            <View>
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