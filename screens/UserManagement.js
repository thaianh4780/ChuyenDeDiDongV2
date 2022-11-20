import React, { useState, useEffect } from "react";
import {
  StyledFormHome,
  StyledDrinkTouchable,
  StyledDrinkTouchableImage,
  SDTText,
  SDTPrice,
  StyledDrinkTouchableAdd,
  SDTBtnText,
  StyledDrinkTouchableDelete,
  StyledDrinkTouchableEdit,
} from "../components/styles";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import TabBtn from "./TabBtn";
//Colors
const UserManagement = ({ navigation }) => {
  const url = "http://192.168.43.243:3000/api/user/all";
  //const url = "http://192.168.1.144:3000/api/drink/list";
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getListUser();
  }, []);
  
  const urls = "http://192.168.43.243:3000/api/user/delete/";
  const getListUser = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res;
        setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const deleteUser =async (id)=>{
    //console.log(urls+""+id)
    await fetch(urls+""+ id)
      .then((res) => res.json())
      .then((res) => {
          console.log(res);
        var data = res;
        // setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const users = listUser.map((item, index) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={require("../assets/image/u3.png")}
        ></StyledDrinkTouchableImage>
        <SDTText> {item.user_name}</SDTText>
        <SDTPrice>{item.role.role_name}</SDTPrice>
        <StyledDrinkTouchableAdd
          onPress={() => navigation.navigate("UserAdding")}
        >
          <SDTBtnText>Add</SDTBtnText>
        </StyledDrinkTouchableAdd>
        <StyledDrinkTouchableDelete
          onPress={() => deleteUser(item._id)}
        >
          <SDTBtnText>Delete</SDTBtnText>
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => navigation.navigate("UserUpdating")}
        >
          <SDTBtnText>Edit</SDTBtnText>
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  })
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StyledFormHome>
            {users}
          </StyledFormHome>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  twocl: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
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
});

export default UserManagement;
