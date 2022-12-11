import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//Icon
import { Octicons, IonicIcon, Feather } from "@expo/vector-icons";

import SelectDropdown from "react-native-select-dropdown";

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
  FormUpdate,
  StyledDrinkTouchableImage,
} from "../components/styles";
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import url from "../Url";
//Colors
const { brand, blur, primary, secondary, black, darkLight } = Colors;
// const data = ["admin", "phuc vu", "thu ngan"];

const DrinkUpdating = ({ navigation, route }) => {
  //const url = "http://172.20.10.4:3000/api/";
  // link danh muc
  //const urlCategory = "http://192.168.117.131:3000/api/category/list";

  // link đồ uống theo id
  //const urlProductById = "http://192.168.117.131:3000/api/drink/";

  // link update đồ uống
  //const urlUpdateProduct = "http://192.168.117.131:3000/api/drink/update/";

  useEffect(() => {
    getListCategory();
    getDrinkById(id);
  }, []);

  const [listCategory, setListCategory] = useState([]);
  const [drink, setDrink] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // lưu link ảnh để up lên database
  const [image, setImage] = useState("");

  // lưu ảnh đã chọn, chụp
  const [picture, setPicture] = useState([]);

  const id = route.params.id;
  const drinkId = id;

  const getDrinkById = async (id) => {
    await fetch(url + "drink/" + id)
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;
        setDrink(data);
        setImage(data.image);
      })
      .catch((err) => console.log("ERR", err));
  };

  const getListCategory = async () => {
    await fetch(url + "category/list")
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;
        setListCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    setImage(result.assets[0].uri);

    setPicture(result.assets[0]);
  };

  const uploadImage = async () => {
    if (!picture.canceled) {
      //Upload imgage to cloudinary
      let base64Img = `data:image/jpg;base64,${picture.base64}`;
      let data = {
        file: base64Img,
        upload_preset: "ImageProject",
      };
      await fetch("https://api.cloudinary.com/v1_1/dborrd4h5/image/upload", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data.url);
          console.log("Upload success");
          setImage(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //console.log("kikiki");
      Alert.alert("is canceled");
    }
  };

  const updateDrink = async (values) => {
    if (!values.price) {
      values.price = drink.price;
    }
    if (!values.name) {
      values.name = drink.name;
    }
    if (!categoryId) {
      values.category = drink.category;
    } else {
      values.category = categoryId;
    }

    //console.log("category: " + values.category);
    //console.log("key: " + categoryId);
    const data = {
      name: values.name,
      price: values.price,
      image: image,
      category: values.category,
    };

    fetch(url + "drink/update/" + drinkId, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          navigation.replace("Home");
          Alert.alert("update is success!");
        }
      });
  };

  const cameraImage = async () => {
    let options = {
      storageOptions: {
        path: "images",
        mediaType: "photo",
      },
      base64: true,
    };
    const result = await ImagePicker.launchCameraAsync(options);

    setImage(result.assets[0].uri);

    setPicture(result.assets[0]);
  };

  const drinkById = () => {
    return ({ handleChange, handleBlur, HandleSubmit, values }) => (
      <StyledFormArea>
        <MyTextInput
          autofocus
          label="Drink name"
          placeholder={drink.name}
          placeholderTextColor={blur}
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
        ></MyTextInput>
        <DrorpDownInput
          value={values.category}
          label="Category"
        ></DrorpDownInput>

        <MyTextInput
          label="Price"
          placeholder={drink.price + ""}
          placeholderTextColor={blur}
          onChangeText={handleChange("price")}
          onBlur={handleBlur("price")}
          value={values.price}
        ></MyTextInput>
        {image && (
          <StyledDrinkTouchableImage
            resizeMode="cover"
            source={{ uri: `${image}` }}
          ></StyledDrinkTouchableImage>
        )}

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => chooseImage()}
        >
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => cameraImage()}
        >
          <Text style={styles.buttonTextStyle}>Select Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => uploadImage()}
        >
          <Text style={styles.buttonTextStyle}>Upload</Text>
        </TouchableOpacity>

        <Line></Line>
        <StyledButton
          onPress={() => {
            updateDrink(values);
            // console.log("value: ");
            // console.log(values);

            // navigation.navigate("Home"),
            //   Alert.alert("Done Update"),
            HandleSubmit;
          }}
        >
          <ButtonText>Submit</ButtonText>
        </StyledButton>
      </StyledFormArea>
    );
  };

  const categories = listCategory.map((item, index) => {
    return <Text key={item._id}>{item.name}</Text>;
  });

  const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <UULabel>{label}</UULabel>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={"right"}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={darkLight}
                size={18}
              />
            );
          }}
          data={categories}
          onSelect={(item, index) => {
            setCategoryId(item.key);
            console.log("key: " + item.key);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    );
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <OLPic
          resizeMode="cover"
          source={require("../assets/image/br3.png")}
        ></OLPic>
        <FormUpdate style={styles.TouchableImage}>
          <PageTitle>Update Drink</PageTitle>
          <Formik
            initialValues={{
              name: "",
              price: "",
              category: "",
            }}
            onSubmit={(values) => {
              //console.log(values);
            }}
          >
            {drinkById()}
          </Formik>
        </FormUpdate>
      </InnerContainer>
    </StyledContainer>
  );
};
const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <UULabel>{label}</UULabel>
      <UUInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  TouchableImage: {
    padding: 20,
    shadowColor: "#1F2937",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 60,
    backgroundColor: secondary,
    borderRadius: 5,
    marginVertical: 10,
    marginBottom: 10,
  },
  dropdown1BtnTxtStyle: {
    color: black,
    textAlign: "left",
    textTransform: "capitalize",
  },
  dropdown1DropdownStyle: {
    backgroundColor: secondary,
  },
  dropdown1RowStyle: {
    backgroundColor: secondary,
    borderBottomColor: blur,
  },
  dropdown1RowTxtStyle: {
    color: black,
    textAlign: "left",
    textTransform: "capitalize",
  },
});

export default DrinkUpdating;
