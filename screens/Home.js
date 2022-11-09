import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';

const Home= ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <StyledHomeBrownZone>
                    <Fontisto style={styles.logo} name="coffeescript" />
                    <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} ></StyledHomeBrownImage>
                    <StyledHomeBrownText>
                        Coffee Shop
                    </StyledHomeBrownText>
                </StyledHomeBrownZone>
                <TestTab style={styles.tab} ></TestTab>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo: {
        paddingTop: 35,
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        color: "white",
    },
    container: {
        flex: 1.5,
        backgroundColor: "white",
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
    tab:{
        flex: 1,
        width:'100%',
    }
    
})
export default Home