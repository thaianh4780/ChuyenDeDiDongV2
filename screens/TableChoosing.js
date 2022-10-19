import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const TableChoosing = ({ navigation }) => {
    return (
        <SafeAreaView  >
            <View style={styles.home} >

                <ScrollView style={styles.scll}
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='never    '>
                    {/* <Text style={styles.title}>This is TableChoosing Page</Text> */}
                    <TouchableOpacity >
                        <MaterialCommunityIcons style={styles.icons} name='desk' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialCommunityIcons style={styles.icons} name='desk' />
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView style={styles.sclr}
                    contentContainerStyle={{
                        flexGrow: 1
                        
                    }}
                    keyboardShouldPersistTaps='never    '>
                    {/* <Text style={styles.title}>This is TableChoosing Page</Text> */}
                    <TouchableOpacity >
                        <MaterialCommunityIcons style={styles.icons} name='desk' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialCommunityIcons style={styles.icons} name='desk' />
                    </TouchableOpacity>
                </ScrollView>
                <Text>Abc</Text>
            </View>
                <MaterialCommunityIcons style={styles.icons} name='desk' />

            <Button onPress={() => navigation.navigate('DrinkChoosing')} title='DrinkChoosing' ></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    title: {
        textAlign: 'center',
    },
    iconic: {
        height: 100,
        width: 100
    },
    icons: {
        fontSize: 100,
        color: '#a85b3c',
        margin: 20,
    },
    scll: {
        width: '50%' // is 50% of container width
    },
    sclr: {
        width: '-50%' // is 50% of container width
    }
})
export default TableChoosing 