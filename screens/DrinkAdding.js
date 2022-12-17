import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//Icon
import {
  Octicons,
  IonicIcon,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
  CFInput,
} from "../components/styles";
import { Formik } from "formik";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";

import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
//Colors
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const data = ["admin", "phuc vu", "thu ngan"];

import url from "../Url";
const DrinkAdding = ({ navigation }) => {
  useEffect(() => {
    getListCategory();
  }, []);
  const [listCategory, setListCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");
  const [picture, setPicture] = useState([]);

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

  const addDrink = async (values, imgUrl) => {
    values.category = categoryId;

    //console.log("category: " + values.category);
    //console.log("key: " + categoryId);
    const data = {
      name: values.name,
      price: values.price,
      image: imgUrl,
      category: values.category,
    };

    fetch(url + "drink/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          navigation.replace("Home");
          Alert.alert("add drink is success!");
        }
      });
  };

  const uploadImage = async (value) => {
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
          // console.log("Upload success");
          // setImage(data.url);
          // Alert.alert("Done! Upload");
          const imgUrl = data.url;
          addDrink(value, imgUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //console.log("kikiki");
      Alert.alert("is canceled");
    }
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

  const handleSubmit = async (values) => {
    await uploadImage(values);
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
                color={brand}
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
          source={require("../assets/image/br4.png")}
        ></OLPic>
        <FormUpdate style={styles.TouchableImage}>
          <PageTitle>Adding Drink</PageTitle>
          <Formik
            initialValues={{ drinkname: "", price: "", category: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, HandleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  autofocus
                  label="Drink name"
                  placeholder={"nam drink"}
                  placeholderTextColor={blur}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <DrorpDownInput value={values.category} label="Category" />
                <MyTextInput
                  label="Price"
                  placeholder={"drink price"}
                  placeholderTextColor={blur}
                  onChangeText={handleChange("price")}
                  onBlur={handleBlur("price")}
                  value={values.price}
                />
                <ChooseFileInput label="Choose Image">
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      {image && (
                        <Image
                          style={styles.CFImage}
                          resizeMode="cover"
                          source={{ uri: `${image}` }}
                        />
                      )}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginRight: "-18%",
                      }}
                    >
                      <TouchableOpacity
                        style={styles.touchBtn}
                        activeOpacity={0.5}
                        onPress={() => chooseImage()}
                      >
                        <MaterialCommunityIcons
                          name="image-edit"
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.touchBtn}
                        activeOpacity={0.5}
                        onPress={() => cameraImage()}
                      >
                        <MaterialCommunityIcons
                          name="camera"
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      {/* <TouchableOpacity
               style={styles.touchBtn}
               activeOpacity={0.5}
               onPress={() => {
                 uploadImage();
               }}
             >
               <MaterialCommunityIcons
                 name="file-upload"
                 style={styles.icon}
               />
             </TouchableOpacity> */}
                    </View>
                  </View>
                </ChooseFileInput>
                <Line></Line>
                <StyledButton
                  onPress={() => {
                    // uploadImage()
                    // updateDrink(values);
                    handleSubmit(values);
                    HandleSubmit;
                  }}
                >
                  <ButtonText>Submit</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
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
const ChooseFileInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <UULabel>{label}</UULabel>
      <CFInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    fontSize: 30,
    color: brand,
  },
  touchBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    marginTop: "-1%",
    marginHorizontal: "1%",
  },
  CFImage: {
    width: 170,
    height: 50,
    marginTop: "-8%",
    borderRadius: 5,
    marginLeft: "-8%",
  },
});

export default DrinkAdding;
