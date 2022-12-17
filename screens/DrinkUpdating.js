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
  CFInput,
} from "../components/styles";
import { Formik } from "formik";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import url from "../Url";
//Colors
const { brand, blur, primary, secondary, black, darkLight } = Colors;

const DrinkUpdating = ({ navigation, route }) => {
  useEffect(() => {
    getListCategory();
    getDrinkById(id);
  }, []);

  const [listCategory, setListCategory] = useState([]);
  const [drink, setDrink] = useState("");
  var categoryId = useState("");

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
          updateDrink(value, imgUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //console.log("kikiki");
      Alert.alert("is canceled");
    }
  };

  const updateDrink = async (values, imgUrl) => {
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
    const data = {
      name: values.name,
      price: values.price,
      image: imgUrl,
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

  const handleSubmit = async (values) => {
    await uploadImage(values);
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
        />
        <DrorpDownInput value={values.category} label="Category" />
        <MyTextInput
          label="Price"
          placeholder={drink.price + ""}
          placeholderTextColor={blur}
          onChangeText={handleChange("price")}
          onBlur={handleBlur("price")}
          value={values.price}
        />
        <ChooseFileInput label="Choose Image">
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
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
                <MaterialCommunityIcons name="image-edit" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchBtn}
                activeOpacity={0.5}
                onPress={() => cameraImage()}
              >
                <MaterialCommunityIcons name="camera" style={styles.icon} />
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
                color={brand}
                size={18}
              />
            );
          }}
          data={categories}
          onSelect={(item, index) => {
            categoryId =item.key;
          }}
          defaultButtonText={
            listCategory.map((item, index) => {
                if (item._id == drink.category) {
                  return <Text>{item.name}</Text>;
                }
            })
        }
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
        <OLPic resizeMode="cover" source={require("../assets/image/br3.png")} />
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
const ChooseFileInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <UULabel>{label}</UULabel>
      <CFInput {...props} />
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
  touchBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    marginTop: "-1%",
    marginHorizontal: "1%",
  },
  icon: {
    fontSize: 30,
    color: brand,
  },
  CFImage: {
    width: 170,
    height: 50,
    marginTop: "-8%",
    borderRadius: 5,
    marginLeft: "-8%",
  },
});

export default DrinkUpdating;
