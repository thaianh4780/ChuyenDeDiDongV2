import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    HomePageLogo,
    StyledFormHome,
    Colors,
    WelcomeContainer,
    StyledTouchable,
    StyledTouchableImage,
    StyledTouchableText,
    WhiteZone,
    WZText,
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, View } from "react-native";

//Colors 
const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <StatusBar style="dark" />
            <WelcomeContainer>
                <HomePageLogo resizeMode="cover" source={require('../assets/image/b.png')} ></HomePageLogo>
                <StyledFormHome style={styles.twocl} >
                    <StyledTouchable style={styles.TouchableImage} onPress={() => {
                        Alert.alert("Already Check In")
                        console.log('Check in') 
                    }} >
                        <StyledTouchableImage resizeMode="cover" source={require('../assets/image/check.png')} ></StyledTouchableImage>
                        <StyledTouchableText> Check In </StyledTouchableText>
                    </StyledTouchable>
                    <StyledTouchable style={styles.TouchableImage} onPress={() => {
                        navigation.navigate('TableChoosing')
                        console.log('Working')
                    }} >
                        <StyledTouchableImage resizeMode="cover" source={require('../assets/image/work.png')} ></StyledTouchableImage>
                        <StyledTouchableText> Working </StyledTouchableText>
                    </StyledTouchable>
                    <StyledTouchable style={styles.TouchableImage} onPress={() => {
                        navigation.navigate('DateRegist')
                        console.log('Regist')
                    }} >
                        <StyledTouchableImage resizeMode="cover" source={require('../assets/image/regist1.png')} ></StyledTouchableImage>
                        <StyledTouchableText> Regist Date </StyledTouchableText>
                    </StyledTouchable>
                    <StyledTouchable style={styles.TouchableImage} onPress={() => {
                        navigation.navigate('Notification')
                        console.log('Notificate')
                    }} >
                        <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                        <StyledTouchableText> Notification</StyledTouchableText>
                    </StyledTouchable>
                </StyledFormHome>
                <WhiteZone>
                    <WZText>
                        Worked Time : 5h
                    </WZText>
                    <WZText>
                        The Salary : 100$
                    </WZText>
                </WhiteZone>
            </WelcomeContainer>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a85b3c',
    },
    twocl: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },

    TouchableImage: {
        padding: 20,
        backgroundColor: '#f0eeee',
        shadowColor: "#000000",
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    }
});

export default Home;


