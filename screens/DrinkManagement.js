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
  Colors,
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
const { brand, darkLight, black, primary } = Colors;

//Colors
const DrinkManagement = ({ navigation }) => {
  // lấy tất cả đồ uống
  const url = "http://192.168.1.144:3000/api/drink/list";

  // lấy đồ uống theo id
  //const url1 = "http://192.168.117.131:3000/api/drink/";

  const [listDrink, setListDrink] = useState([]);

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    getListDrink();
  }, []);

  const getListDrink = async (id) => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const getDrinkById = async (id) => {
    console.log("id: " + id);
  };
  //   await fetch(url1 + "" + id)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res);
  //       var data = res.data;
  //       setDrink(data);
  //     })
  //     .catch((err) => console.log("ERR", err));
  // };

  const drinks = listDrink.map((item, index) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableAdd
          onPress={() => navigation.navigate("DrinkAdding")}
        >
          <SDTBtnText>Add</SDTBtnText>
        </StyledDrinkTouchableAdd>
        <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
          <SDTBtnText>Delete</SDTBtnText>
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() =>
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            })
          }
        >
          <SDTBtnText>Edit</SDTBtnText>
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StyledFormHome>{drinks}</StyledFormHome>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: primary ,
  },
  twocl: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  TouchableImage: {
    elevation: 10,
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

export default DrinkManagement;
