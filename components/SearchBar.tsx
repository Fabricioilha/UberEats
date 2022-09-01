import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

type IsearchBarProps = {
  cityHandler:React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = (props: IsearchBarProps) => {
  const [city, setCity] = useState("florianopolis")
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{          
          key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4',
          language: 'pt',
        }}

        onPress={(data, details = null)=>{
          const city = data.description.split(",")[0]
          props.cityHandler(city)
        }}
        
        placeholder='Search'
        styles={{
          textInput:{
            backgroundColor:"#eee",
            borderRadius:20,
            fontWeight:"700",
            marginTop:7
          },
          textInputContainer:{
            backgroundColor:"#eee",
            borderRadius:20,
            flexDirection:"row",
            alignItems:"center",
            marginRight:10  
          }
        }}
        renderLeftButton={()=>
          <View style={{marginLeft:10}}> 
            <Ionicons name="location-sharp" size={24} /> 
          </View>
        }
        renderRightButton={()=>
          <TouchableOpacity 
            style={{
              flexDirection:"row",
              marginRight:8,
              backgroundColor:"#fff",
              padding:9,
              borderRadius:30,
              alignItems:"center"
            }}
            onPress={()=> props.cityHandler(city)}
            >
            <AntDesign name="clockcircle" size={11} style={{marginRight:6}} />
            <Text >Search</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default SearchBar