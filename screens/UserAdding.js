import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Button from '../components/Button';


const UserAdding = ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>Trang UserAdding</Text>
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
export default UserAdding 