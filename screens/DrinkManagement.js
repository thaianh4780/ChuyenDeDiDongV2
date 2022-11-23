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
  // ""
  const url = "http://192.168.1.123:3000/api/drink/list";
  const [check, setCheck] = useState(false);

  const [list, setList] = useState([]);
  useEffect(() => {

    getListDrink();
  }, [check]);
  
  const getListDrink = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        setList(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //.
  const urls = "http://192.168.1.123:3000/api/drink/delete/";

  const createTwoButtonAlert = (id) =>
    Alert.alert(
      "Thông báo",
      "bạn có chắc muốn xóa không",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress:()=> deleteDrink(id)}
      ]
    );


  const deleteDrink =async (id)=>{
    console.log(urls+""+id)
    await fetch(urls+""+ id, {
        method: 'DELETE',
    })
      .then((res) => res.json()).then((res) => {
          // console.log(res);
          setCheck(!check);
      })
      .catch((err) => console.log("ERR", err));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StyledFormHome>
            {list.map((item, index) => {
              return (
                <StyledDrinkTouchable style={styles.TouchableImage}>
                  <StyledDrinkTouchableImage
                    resizeMode="cover"
                    source={{ uri: `${item.image}` }}
                  ></StyledDrinkTouchableImage>
                  <SDTText>{item.name}</SDTText>
                  <SDTPrice>{item.price}$</SDTPrice>
                  <StyledDrinkTouchableAdd
                         
                  >
                    <SDTBtnText>Add</SDTBtnText>
                  </StyledDrinkTouchableAdd>
                  <StyledDrinkTouchableDelete
                    onPress={() => createTwoButtonAlert(item._id)}
                  >
                    <SDTBtnText>Delete</SDTBtnText>
                  </StyledDrinkTouchableDelete>
                  <StyledDrinkTouchableEdit
                    onPress={() => {setCheck(!check), navigation.navigate("DrinkUpdating")}}
                  >
                    <SDTBtnText>Edit</SDTBtnText>
                  </StyledDrinkTouchableEdit>
                </StyledDrinkTouchable>
              );
            })}
          </StyledFormHome>
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