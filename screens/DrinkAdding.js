import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Button from '../components/Button';


const DrinkAdding = ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>Trang DrinkAdding</Text>
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
export default DrinkAdding 