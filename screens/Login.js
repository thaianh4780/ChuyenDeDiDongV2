import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import url from "../Url";

//Icon
import { Octicons, IonicIcon } from "@expo/vector-icons";
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
} from "../components/styles";
import { Formik } from "formik";
import { Alert, StyleSheet, View } from "react-native";

//Colors
const { brand, darkLight, primary, blur } = Colors;
const Login = ({ navigation }) => {

  //login
  const login = (values) => {
    // console.log(url + "user/login");
    fetch(url + "user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Alert.alert(data.error);
        } else {
          // console.log(data.data.role);
          if (data.data.role == "63731105fa3b63917784f678") {
            return navigation.navigate("Home");
          } else {
            Alert.alert("User not admin");
          }
        }
      });
  };

  //check internet
  const checkInternet = (values) => {
    NetInfo.fetch().then(state => {
      if (state.isConnected == true) {
        login(values);
      } else {
        Alert.alert("Please connect Internet");
      }
    });
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("../assets/image/a.png")}
        ></PageLogo>
        <FormLog style={styles.TouchableImage}>
          <PageTitle>Login</PageTitle>
          <Formik
            initialValues={{ user_name: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              HandleSubmit,
              values,
              hidePassword,
              setHidePassword,
            }) => (
              <StyledFormArea>
                <MyTextInput
                  autofocus
                  autoCapitalize="none"
                  label="User name"
                  icon="mail"
                  placeholder="NameAbc"
                  placeholderTextColor={blur}
                  onChangeText={handleChange("user_name")}
                  onBlur={handleBlur("user_name")}
                  value={values.user_name}
                ></MyTextInput>
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * *"
                  placeholderTextColor={blur}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                ></MyTextInput>
                <Line />
                <StyledButton
                  onPress={() => {
                    // checkInternet(values);
                    navigation.navigate("Home");
                    // HandleSubmit
                  }}
                >
                  <ButtonText>Login</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </FormLog>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};
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
    elevation: 10,
    padding: 20,
    shadowColor: "#1F2937",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
});

export default Login;
