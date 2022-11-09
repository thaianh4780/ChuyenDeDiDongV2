import React from "react";
import { StatusBar } from 'expo-status-bar';

//Icon
import { Octicons, IonicIcon,Feather } from '@expo/vector-icons';

import SelectDropdown from 'react-native-select-dropdown'

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
    FormAdd,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

//Colors 
const { brand, darkLight } = Colors;
const countries = ["addmin", "phuc vu", "thu ngan",]
const UserAdding = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/image/a.png')} ></PageLogo>
                <FormAdd style={styles.TouchableImage} >
                    <PageTitle>UserAdding</PageTitle>
                    <Formik
                        initialValues={{ phoneNumber: '',password: '', phoneNumber:'', email: '', Permission: ''}}
                        onSubmit={(values) => { console.log(values); }} >
                        
                        {({ handleChange, handleBlur, HandleSubmit, values, hidePassword, setHidePassword }) => (
                            // countries = ["Egypt", "Canada", "Australia", "Ireland"],
                            <StyledFormArea>
                                

                                <MyTextInput
                                    autofocus
                                    label="uer name"
                                    icon="account"
                                    placeholder="abc"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="* * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}>
                                </MyTextInput>
                                <MyTextInput
                                    autofocus
                                    label="phone number"
                                    icon="phone"
                                    placeholder="0123"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber} >
                                </MyTextInput>
                                <Text  style= {styles.t}>decentralization</Text>
                                <SelectDropdown
                                    data={countries}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item
                                    }}/>
                                <Line />
                                <StyledButton onPress={() => { navigation.navigate('Home'), HandleSubmit }} >
                                    <ButtonText>
                                        Submit
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
        color: "white",
    },
    t:{
        fontWeigh:'bold',
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

export default UserAdding;


