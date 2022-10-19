import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';

const Notification = ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>This is Notification Page</Text>
            <Button onPress={() => navigation.navigate('Login')} title='Next' ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
    }
})
export default Notification 