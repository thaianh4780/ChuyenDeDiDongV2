import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Button from '../components/Button';
import { FormLog, LeftIcon, StyledFormArea, StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone, StyledInputLabel, StyledTextInput, StyledTextInputs } from '../components/styles';
import { Fontisto, Octicons } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
import { Formik } from 'formik';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

//   let [fontsLoaded] = useFonts({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }
const { brand, darkLight, black, primary, secondary } = Colors;

const Home = ({ navigation }) => {
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
        color: primary,
        // fontFamily:'AlexBrush-Regular',
    },
    container: {
        flex: 1.5,
        backgroundColor: primary,
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
    tab: {
        flex: 1,
        width: '100%',
    },

})
export default Home