import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary } = Colors;

//note: justifyContent: 'center' : theo height || alignItems: 'center' : theo width

const Test = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' ,backgroundColor: brand ,  flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "green" }}>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow" }}>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    // logo: {
    //     paddingTop: 20,
    //     fontSize: 30,
    //     textAlign: "center",
    //     justifyContent: "center",
    //     color: primary,
    // },
    container: {
        flex: 1,
        backgroundColor: primary,
    },

})
export default Test 