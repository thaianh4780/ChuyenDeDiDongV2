import React from "react";
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Icon
import { Octicons, IonicIcon, Feather } from '@expo/vector-icons';

import SelectDropdown from 'react-native-select-dropdown'

import {
    StyledContainer,
    InnerContainer,
    OLPic,
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
    UULabel,
    UUInput,
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert } from "react-native";
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const data = ["admin", "phuc vu", "thu ngan",]
const UserAdding = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br3.png')} ></OLPic>
                <FormAdd style={styles.TouchableImage} >
                    <PageTitle>Adding User</PageTitle>
                    <Formik
                        initialValues={{ username: '', password: '', phoneNumber: '', address: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="Username"
                                    placeholder="Username"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Password"
                                    placeholder="Password"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}>
                                </MyTextInput>
                                <MyTextInput
                                    label="PhoneNumber"
                                    placeholder="0123456789"
                                    placeholderTextColor={blur}
                                    keyboardType='numeric'
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Address"
                                    placeholder="Address"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}>
                                </MyTextInput>
                                <DrorpDownInput
                                    label="Permission">
                                </DrorpDownInput>
                                <Line />
                                <StyledButton
                                    onPress={() => {
                                        navigation.navigate('Home'),
                                            Alert.alert("Done Adding"),
                                            HandleSubmit
                                    }} >
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
const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View >
            <UULabel>
                {label}
            </UULabel>
            <UUInput {...props} />
        </View>
    )
}
const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <UULabel>
                {label}
            </UULabel>
            <SelectDropdown
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                dropdownIconPosition={'right'}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={darkLight} size={18} />;
                }}
                data={data}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    dropdown1BtnStyle: {
        width: '100%',
        height: 60,
        backgroundColor: secondary,
        borderRadius: 5,
        marginVertical: 10,
        marginBottom: 10,
    },
    dropdown1BtnTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
    dropdown1DropdownStyle: {
        backgroundColor: secondary
    },
    dropdown1RowStyle: {
        backgroundColor: secondary,
        borderBottomColor: blur
    },
    dropdown1RowTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
})

export default UserAdding;


