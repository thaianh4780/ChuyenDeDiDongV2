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
    FormLog,
} from "../components/styles"
import { Formik } from "formik";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../components/Button";

//Colors 
const { brand, darkLight ,primary,blur } = Colors;
const Login = ({ navigation }) => {
    const login = (values) => {
        console.log(values.password);
        fetch('http://192.168.1.8:3000/api/user/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            // console.log(data);
            if (data.error) {
                Alert.alert(data.error);
            } else {
                return navigation.navigate('Home');
            }
        })
    };
    return (
        <StyledContainer >
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/a.png')} ></PageLogo>
                <FormLog style={styles.TouchableImage} >
                    <PageTitle>Login</PageTitle>
                    <Formik
                        initialValues={{ user_name: '', password: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="User name"
                                    icon="mail"
                                    placeholder="NameAbc"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('user_name')}
                                    onBlur={handleBlur('user_name')}
                                    value={values.user_name}
                                >
                                </MyTextInput>
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="* * * * * *"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                >
                                </MyTextInput>
                                <Line />
                                <StyledButton onPress={() => {
                                    login(values);
                                    HandleSubmit
                                }} >
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </FormLog>
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
        backgroundColor: brand,
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

export default Login;


