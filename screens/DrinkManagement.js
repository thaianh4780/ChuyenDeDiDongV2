import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Button from '../components/Button';


const DrinkManagement = ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>Trang DrinkManagement</Text>
            <Button onPress={() => navigation.navigate('DrinkAdding')} title="DrinkAdding"></Button>
            <Button onPress={() => navigation.navigate('DrinkUpdating')} title="DrinkUpdating"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
    }
})
export default DrinkManagement 