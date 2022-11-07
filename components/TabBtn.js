import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SDTBtnText, StyledDrinkTouchableAdd, StyledDrinkTouchableDelete, StyledDrinkTouchableEdit } from './styles'

const TabBtn = ({ navigation}) => {
    return (
        <View>
            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                <SDTBtnText>Add</SDTBtnText>
            </StyledDrinkTouchableAdd>
            <StyledDrinkTouchableDelete onPress={() => navigation.navigate('DrinkUpdating')} >
                <SDTBtnText>Delete</SDTBtnText>
            </StyledDrinkTouchableDelete>
            <StyledDrinkTouchableEdit onPress={() => Alert.alert("Deleted")} >
                <SDTBtnText>Edit</SDTBtnText>
            </StyledDrinkTouchableEdit>
        </View>
    )
}

export default TabBtn

const styles = StyleSheet.create({})