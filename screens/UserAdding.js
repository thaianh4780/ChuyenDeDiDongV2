import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

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
import { StyleSheet, View, Text, Alert, ScrollViewComponent, ScrollView } from "react-native";
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';
import reactDom from "react-dom";
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const data = ["Admin", "Phục Vụ", "Thu Ngân"];
const UserAdding = ({ navigation }) => {
    //values
    const [listRole, setListRole] = useState([""]);
    const [role, setRole] = useState("");
    useEffect(() => { getAllRole() }, []);
    //get all role
    const getAllRole = async () => {
        await fetch('http://192.168.1.8:3000/api/role/all')
            .then((res) => res.json())
            .then((res) => {
                var data = res;
                setListRole(data);
            })
            .catch((err) => console.log("ERR", err));
    };
    //add user
    const addUser = async (values) => {
        values.role = role;
        console.log(values);
        console.log(values.user_name);
        fetch('http://192.168.1.8:3000/api/user/add', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            if (data.error) {
                Alert.alert(JSON.stringify(data.error));
                return navigation.avigate('UserUpdating');
            } else {
                // Alert.alert(data);
                return navigation.navigate('Home');
            }
        })
    };
    //get id role in lost role
    const getIdRole = listRole.map((item, index) => {
        return <Text key={item._id}>{item.role_name}</Text>;
    });
    //setup DrorpDownInput
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
                    data={getIdRole}
                    onSelect={(selectedItem, index) => {
                        setRole(selectedItem.key);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }} />
            </View>
        )
    };

    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br3.png')} ></OLPic>
                <FormAdd style={styles.TouchableImage} >
                    <ScrollView><PageTitle>Add User</PageTitle>
                        <Formik
                            initialValues={{ user_name: '', password: '', full_name: '', phone: '', role: '' }}
                            onSubmit={(values) => { console.log(values); }} >
                            {({ handleChange, handleBlur, HandleSubmit, values }) => (
                                <StyledFormArea>
                                    <MyTextInput
                                        autofocus
                                        label="Tên Tài Khoản"
                                        placeholder="abc..."
                                        placeholderTextColor={blur}
                                        onChangeText={handleChange('user_name')}
                                        onBlur={handleBlur('user_name')}
                                        value={values.user_name} >
                                    </MyTextInput>
                                    <MyTextInput
                                        label="Mật Khẩu"
                                        placeholder="* * * * * *"
                                        placeholderTextColor={blur}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}>
                                    </MyTextInput>
                                    <MyTextInput
                                        autofocus
                                        label="Họ và tên"
                                        placeholder="Nguyễn Văn...."
                                        placeholderTextColor={blur}
                                        onChangeText={handleChange('full_name')}
                                        onBlur={handleBlur('full_name')}
                                        value={values.full_name} >
                                    </MyTextInput>
                                    <MyTextInput
                                        label="Số Điện Thoại"
                                        placeholder="0123456789"
                                        placeholderTextColor={blur}
                                        keyboardType='numeric'
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone} >
                                    </MyTextInput>
                                    {/* <MyTextInput
                                    label="Địa Chỉ"
                                    placeholder="32/16, 12Đ,..."
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}>
                                </MyTextInput> */}
                                    <DrorpDownInput
                                        label="Vai Trò"
                                        onSelect={handleChange('role')}
                                        value={values.role}>
                                    </DrorpDownInput>
                                    <Line />
                                    <StyledButton
                                        onPress={() => {
                                            console.log(values.role);
                                            addUser(values),
                                                // navigation.navigate('Home'),
                                                //     Alert.alert("Done Adding"),
                                                HandleSubmit
                                        }} >
                                        <ButtonText>
                                            Submit
                                        </ButtonText>
                                    </StyledButton>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </ScrollView>
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


