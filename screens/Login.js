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
    StyledTextInput,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Line,
    Colors,
} from "../components/styles"
import { Formik } from "formik";
import { View } from "react-native";

//Colors 
const { brand, darkLight } = Colors;

const Login = ({ navigation }) => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/a.png')} ></PageLogo>
                <PageTitle>Login</PageTitle>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => { console.log(values); }} >
                    {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                        <StyledFormArea>
                            <MyTextInput
                                autofocus
                                label="User name"
                                icon="mail"
                                placeholder="NameAbc"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            >
                            </MyTextInput>
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={true}
                            >
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
            <StyledTextInput {...props} />
        </View>
    )
}

export default Login;


