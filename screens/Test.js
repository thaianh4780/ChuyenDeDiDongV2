import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight,black ,primary, secondary} = Colors;

const Test = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <StyledHomeBrownZone>
                    <Fontisto style={styles.logo} name="coffeescript" />
                    <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} ></StyledHomeBrownImage>
                    <StyledHomeBrownText>
                        Coffee Shop
                    </StyledHomeBrownText>
                </StyledHomeBrownZone>
                <TestTab></TestTab>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo: {
        paddingTop: 20,
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        color: primary,
    },
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    
})
export default Test 