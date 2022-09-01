import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { IBusinesses } from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY = "j3rK8JdD6obCYFQIqLClaV23rBXcQ8FLadvowQt1V0eDiJX_PiQzM0vBRQx8QlMtEqxvWNMmMFnkcZJJG8pqPwC_R7OhT2xC3MEWR9NMaZPOosTENcYUfZQgtAAQY3Yx"

const Home = () => {
  const [restaurantData, setRestaurantData] = useState<IBusinesses[]>([])
  const [city, setCity] = useState("Rio de Janeiro")
  const [activeTab, setActiveTab] = useState("Delivery")

  useEffect(()=>{getRestaurantsFromYelp()},[city])
  
  const getRestaurantsFromYelp = async ()=>{
    const apiOptions = {    
      headers:{
        Authorization:`Bearer ${YELP_API_KEY}`
      }
    }
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    const req = await fetch(yelpUrl, apiOptions)
    const json = await req.json()
    setRestaurantData(json.businesses)
  }


  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
      <View style={{padding:15, backgroundColor:"#fff"}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}

export default Home