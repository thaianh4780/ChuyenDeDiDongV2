import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SDTBtnText, StyledDrinkTouchableAdd, StyledDrinkTouchableDelete, StyledDrinkTouchableEdit } from './styles'
import Button from './Button'

const TabBtn = ({ navigation}) => {
    return (
        <View>
            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                <SDTBtnText>Add</SDTBtnText>
            </StyledDrinkTouchableAdd>
            <StyledDrinkTouchableDelete  onPress={() => Alert.alert("Deleted")}>
                <SDTBtnText>Delete</SDTBtnText>
            </StyledDrinkTouchableDelete>
            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                <SDTBtnText>Edit</SDTBtnText>
            </StyledDrinkTouchableEdit>
            <Button onPress={() => navigation.navigate('Notification')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})
export default TabBtn