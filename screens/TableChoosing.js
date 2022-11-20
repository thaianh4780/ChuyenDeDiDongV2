import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone, StyledTouchable, StyledTouchableImage, StyledTouchableText } from '../components/styles';

import styled from 'styled-components';
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data=[{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},];
const numColumns = 2;

import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary ,neon_blur ,light_brand } = Colors;
const formatData =(data, numColumns)=>{
    const numberOfFullRows = Math.floor(data.length / numColumns)
    let munberOfElementsLastRow = data.length - (numberOfFullRows* numColumns);
    while (munberOfElementsLastRow !== numColumns && munberOfElementsLastRow !== 0){
        data.push({key:`blank-${munberOfElementsLastRow}`, empty: true});
        munberOfElementsLastRow = munberOfElementsLastRow+1;
    }
    return data;
}

export default class TableChoosing extends React.Component{
    renderItem = ({item, index})=>{
        if(item.empty === true){
            return (
                <View style={[styleds.item,styleds.itemInvisible]}>
                </View>
            )

        }
        return (
            <View style = {styleds.item}>
                    <Text style={styleds.itemText}>{item.key}</Text>
            </View>
        );
    };
    render(){
        return (
            <View style = {styleds.container}>
                <FlatList
                    data={data}
                    style={styleds.container}
                    renderItem={this.renderItem}
                    // keyExtractor={(item, index) => index.toString()}
                    numColumns = {numColumns}>
                </FlatList>
            </View>
        )
    }
}

const styleds = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:20,

    },
    item: {
        backgroundColor: light_brand,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        height: Dimensions.get('window').width/ numColumns,
        
    },
    itemInvisible: {
    backgroundColor: 'transparent',
    },   
     itemText: {
        color: 'white',
        fontSize: 20,
    }

});