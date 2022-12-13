import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../components/Button";
import {
  FormLog,
  LeftIcon,
  StyledFormArea,
  StyledHomeBrownImage,
  StyledHomeBrownLogo,
  StyledHomeBrownText,
  StyledHomeBrownZone,
  StyledInputLabel,
  StyledTextInput,
  StyledTextInputs,
} from "../components/styles";
import { Fontisto, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TestTab from "./TestTab";
import { Colors } from "../components/styles";
const { brand, darkLight, black, primary, secondary } = Colors;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StyledHomeBrownZone>
        <Fontisto style={styles.logo} name="coffeescript" />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <StyledHomeBrownImage
            resizeMode="cover"
            source={require("../assets/image/a.png")}
          ></StyledHomeBrownImage>
        </TouchableWithoutFeedback>
        <StyledHomeBrownLogo
          resizeMode="cover"
          source={require("../assets/image/Untitled.png")}
        />
      </StyledHomeBrownZone>
      <TestTab style={styles.tab}></TestTab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 105,
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    color: primary,
  },
  container: {
    flex: 1.5,
    backgroundColor: primary,
  },
  TouchableImage: {
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
  tab: {
    flex: 1,
    width: "100%",
  },
});
export default Home;
