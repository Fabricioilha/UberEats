import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type IHeaderTabsProps = {
    activeTab:string,
    setActiveTab:React.Dispatch<React.SetStateAction<string>>
}

const HeaderTabs = (props: IHeaderTabsProps) => {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text="Delivery" btnColor="#000" textColor="#fff" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <HeaderButton text="PickUp" btnColor="#000" textColor="#fff" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
        </View>
    )
}

const HeaderButton = (props: Props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text? "#000" : "#fff",
            paddingVertical: 6,
            paddingHorizontal: 16,
            marginTop: 40,
            borderRadius: 30
            }}
        onPress={()=> props.setActiveTab(props.text)}
        >
        
        <Text style={{
            color: props.activeTab === props.text? "#fff" :"#000",
            fontSize: 15,
            fontWeight: "900"
        }}>
            {props.text}
        </Text>
        
    </TouchableOpacity>
)


export default HeaderTabs


type Props = {
    text:string,
    btnColor: string,
    textColor:string,
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}