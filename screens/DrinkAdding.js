import React from "react";
import { StatusBar } from 'expo-status-bar';

//Icon
import { Octicons, IonicIcon } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledTextInputs,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Line,
    Colors,
    FormAdd,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

//Colors 
const { brand, darkLight } = Colors;

const DrinkAdding = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/a.png')} ></PageLogo>
                <FormAdd style={styles.TouchableImage} >
                    <PageTitle>DrinkAdding</PageTitle>
                    <Formik
                        initialValues={{ username: '', price:'',category: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label=" name"
                                    placeholder="input name"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username} >
                                </MyTextInput>
                                <MyTextInput
                                    autofocus
                                    label="price"
                                    placeholder="input price"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username} >
                                </MyTextInput>
                                <MyTextInput
                                    autofocus
                                    label="category"
                                    placeholder="input category"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username} >
                                </MyTextInput>
                                <Line />
                                <StyledButton onPress={() => { navigation.navigate('Home'), HandleSubmit }} >
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormAdd>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInputs {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        paddingTop: 20,
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        color: "white",
    },
    container: {
        flex: 1,
        backgroundColor: "#a85b3c",
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },

})

export default DrinkAdding;


