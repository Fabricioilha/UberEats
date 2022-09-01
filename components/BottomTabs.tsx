import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = () => {
  return (
    <View style={{flexDirection:"row", margin:10, marginHorizontal:30, justifyContent:"space-between"}}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="order" />
      <Icon icon="user" text="user" />
    </View>
  )
}

const Icon = (props: any)=>(
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon}
                size={25}
                style={{
                    marginBottom:3,
                    alignSelf:"center"
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

export default BottomTabs