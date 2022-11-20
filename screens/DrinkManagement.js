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
<<<<<<< HEAD
  const url = "http://192.168.43.243:3000/api/drink/list";
=======
  const url = "http://192.168.1.144:3000/api/drink/list";
>>>>>>> MinhThang

  const [list, setList] = useState([]);
  useEffect(() => {
    getListDrink();
  }, []);

  const getListDrink = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
<<<<<<< HEAD
        console.log(res);
=======
        // console.log(res);
>>>>>>> MinhThang
        var data = res.data;
        setList(data);
      })
      .catch((err) => console.log("ERR", err));
  };
<<<<<<< HEAD
  //.
  const urls = "http://192.168.43.243:3000/api/drink/delete/";

  const deleteDrink =async (id)=>{
    // console.log(urls+""+id)
    await fetch(urls+""+ id, {
        method: 'DELETE',
    })
      .then((res) => res.json()).then((res) => {
          console.log(res);
        // var data = res.data;
        //  setList(res);
      })
      .catch((err) => console.log("ERR", err));
  };

=======
>>>>>>> MinhThang
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
                    onPress={() => navigation.navigate("DrinkAdding")}
                  >
                    <SDTBtnText>Add</SDTBtnText>
                  </StyledDrinkTouchableAdd>
                  <StyledDrinkTouchableDelete
<<<<<<< HEAD
                    onPress={() => deleteDrink(item._id)}
=======
                    onPress={() => Alert.alert("Deleted")}
>>>>>>> MinhThang
                  >
                    <SDTBtnText>Delete</SDTBtnText>
                  </StyledDrinkTouchableDelete>
                  <StyledDrinkTouchableEdit
                    onPress={() => navigation.navigate("DrinkUpdating")}
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
