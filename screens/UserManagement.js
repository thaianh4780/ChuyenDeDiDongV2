import React, { useState, useEffect } from "react";
import { Fontisto, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
const { brand, darkLight, black, primary, blue } = Colors;
import FontAwesome from "react-native-vector-icons/FontAwesome";
import url from "../Url";
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
  Colors,
  UULabel,
} from "../components/styles";
import { useIsFocused } from "@react-navigation/native";
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//import url from "../Url";
//Colors
const UserManagement = ({ navigation }) => {
  //Values
  // const url = "http://192.168.117.119:3000/api";
  const [listUser, setListUser] = useState([]);
  const isFocused = useIsFocused();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    getListUser();
  }, [check, isFocused]);
  //get list user
  const getListUser = async () => {
    await fetch(url + "user/all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        var data = res;
        setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //delete user by id
  const createTwoButtonAlert = (id) =>
    Alert.alert("Thông báo", "bạn có chắc muốn xóa không", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteUser(id) },
    ]);
  const deleteUser = (id) => {
    const url = url + "/user/delete/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
        } else {
          setCheck(!check);
          console.log(check);
        }
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "2%",
            marginBottom: "5%",
          }}
        >
          {/* <DrorpDownInput
          onSelect={handleChange('role')}
          value={values.role}
          ></DrorpDownInput> */}
          <View>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                navigation.navigate("UserAdding");
              }}
            >
              <MaterialCommunityIcons name="water-plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <StyledFormHome>
            {listUser.map((item) => {
              return (
                <StyledDrinkTouchable style={styles.TouchableImage}>
                  <StyledDrinkTouchableImage
                    resizeMode="cover"
                    source={require("../assets/image/u3.png")}
                  ></StyledDrinkTouchableImage>
                  <SDTText> {item.user_name}</SDTText>
                  <SDTPrice>{item.role.role_name}</SDTPrice>
                  <StyledDrinkTouchableDelete
                    onPress={() => {
                      createTwoButtonAlert(item._id);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="trash-can"
                      style={styles.icon}
                    />
                  </StyledDrinkTouchableDelete>
                  <StyledDrinkTouchableEdit
                    onPress={() =>
                      navigation.navigate("UserUpdating", { id: item._id })
                    }
                  >
                    <MaterialCommunityIcons
                      name="tooltip-edit"
                      style={styles.icon}
                    />
                  </StyledDrinkTouchableEdit>
                </StyledDrinkTouchable>
              );
            })}
            {/* {users} */}
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
  icon: {
    fontSize: 30,
    color: primary,
  },
  leftBtn: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: brand,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
  },
  addBtn: {
    width: 40,
    height: 40,
    backgroundColor: blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginleft: "2%",
  },
  dropDown: {
    height: 40,
    width: 190,
    borderWidth: 1.5,
    borderColor: brand,
    position: "absolute",
    borderRadius: 5,
    backgroundColor: primary,
  },
});

export default UserManagement;
