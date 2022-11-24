import React, { useState, useEffect } from "react";
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
const UserUpdatding = ({ route, navigation }) => {
    const { id } = route.params;
    const [user, setUser] = useState("");
    useEffect(() => { getUser(); console.log(user.user_name); }, []);
    const getUser = async () => {
        await fetch('http://192.168.1.8:3000/api/user/getbyid/' + id)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                var data = res;
                setUser(data);
            })
            .catch((err) => console.log("ERR", err));
    };

    const sendBackEnd = (user) => {
        //console.log(user);
        Alert.alert(
            "Thông báo",
            "bạn có chắc muốn sửa không",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        if (user.full_name == "" || user.phone == "") {
                            Alert.alert("Vui lòng điền đầy đủ thông tin!!");
                            return;
                        } else {
                            //console.log(user);
                            fetch('http://192.168.1.8:3000/api/user/update/' + id, {
                                method: 'PUT',
                                headers: { 'content-type': 'application/json' },
                                body: JSON.stringify(user),
                            }).then(res => res).then(data => {
                                if (data.error) {
                                    console.log(data.error);
                                } else {
                                    //console.log(data);
                                    Alert.alert("Add user is success!");
                                    return navigation.goBack();
                                }
                            })
                            return;
                        }
                    }
                }
            ]
        );


    };

    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br1.png')} ></OLPic>
                <FormAdd style={styles.TouchableImage} >
                    <PageTitle>update User</PageTitle>
                    <Formik
                        initialValues={{ user_name: '', password: '', full_name: '', phone: '' }}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    autofocus
                                    label="Tên Tài Khoản"
                                    placeholder={user.user_name}
                                    editable={false}
                                    selectTextOnFocus={false}
                                    placeholderTextColor={blur}
                                    onChangeText={(text) => setUser({ ...user, user_name: text })}
                                    onBlur={handleBlur('user_name')}
                                    value={user.user_name} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Mật Khẩu (nếu có)"
                                    placeholder={user.password}
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}>
                                </MyTextInput>
                                <MyTextInput
                                    autofocus
                                    label="Họ và Tên"
                                    placeholder={user.full_name}
                                    placeholderTextColor={blur}
                                    onChangeText={(text) => setUser({ ...user, full_name: text })}
                                    onBlur={handleBlur('full_name')}
                                    value={user.full_name} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Số Điện Thoại"
                                    placeholder={user.phone}
                                    placeholderTextColor={blur}
                                    keyboardType='numeric'
                                    onChangeText={(text) => setUser({ ...user, phone: text })}
                                    onBlur={handleBlur('phone')}
                                    value={user.phone} >
                                </MyTextInput>
                                <DrorpDownInput
                                    label="Permission">
                                </DrorpDownInput>
                                <Line />
                                <StyledButton onPress={() => {
                                    if (values.password != "" || values.password != user.password) {
                                        user.password = values.password;
                                        console.log("okla");
                                        console.log(user);
                                        sendBackEnd(user);

                                    } else {
                                        // console.log("ok");
                                        return sendBackEnd(user);
                                    };
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

export default UserUpdatding;


