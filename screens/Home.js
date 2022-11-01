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
import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

//Colors 
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container} >
                <WelcomeContainer>
                    <StyledFormHome style={styles.twocl} >
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('SalaryManagement')
                            console.log('SalaryManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                            <StyledTouchableText> Salary</StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('TableManagement')
                            console.log('TableManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                            <StyledTouchableText> Table</StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('UserManagement')
                            console.log('UserManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                            <StyledTouchableText> User</StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('RegistDateManagement')
                            console.log('RegistDateManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                            <StyledTouchableText> RegistDate</StyledTouchableText>
                        </StyledTouchable>
                        <StyledTouchable style={styles.TouchableImage} onPress={() => {
                            navigation.navigate('DrinkManagement')
                            console.log('DrinkManagement')
                        }} >
                            <StyledTouchableImage resizeMode="cover" source={require('../assets/image/notificate.png')} ></StyledTouchableImage>
                            <StyledTouchableText> Drink</StyledTouchableText>
                        </StyledTouchable>
                    </StyledFormHome>
                </WelcomeContainer>
            </ScrollView>
        </SafeAreaView>


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


