import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurantItems = ({ restaurantData }: IRestaurantsProps) => {
  return (
    <>
      {
        restaurantData.map((restaurant, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7} style={{ marginBottom: 30 }}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
              <RestaurantImage image_url={restaurant.image_url ? restaurant.image_url : "https://devxpresets.com/wp-content/uploads/2022/05/exemplo02-store-200x200.jpg"} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
                categories={restaurant.categories}
              />
            </View>
          </TouchableOpacity>
        ))
      }
    </>
  )
}

const RestaurantImage = ({ image_url }: { image_url: string }) => (
  <>
    <Image
      source={{ uri: `${image_url}` }}
      style={{ width: "100%", height: 160, borderRadius: 5}}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = (props: any) => (
  <>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <View style={{ backgroundColor: "#fff", height: 30, width: 30, borderRadius: 30, alignItems: "center", justifyContent: "center", borderTopEndRadius: 15 }}>
        <Text>{props.rating}</Text>
      </View>
    </View>
    <Text style={{ fontSize: 13, color: "#777" }}>30 - 45min</Text>
  </>
)

export default RestaurantItems

type IRestaurantsProps = {
  restaurantData: IBusinesses[]  
}

export interface IBusinesses {
  id:string,
  alias:string,
  name:string,
  image_url:string,
  is_closed: boolean,
  url: string,
  review_count: number,
  categories: [
    {
      alias: string,
      title: string
    },
    {
      alias: string,
      title: string
    },
    {
      alias: string,
      title: string
    }
  ],
  rating: number,
  coordinates: {
    latitude: number,
    longitude: number
  },
  transactions: [],
  location: {
    address1: string,
    address2: string ,
    address3: string,
    city: string,
    zip_code: number,
    country: string,
    state: string,
    display_address: [
      string, number,
      string,
      string
    ]
  },
  phone: number,
  display_phone: number,
  distance: number
}