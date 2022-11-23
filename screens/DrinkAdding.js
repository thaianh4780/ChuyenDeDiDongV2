import React,{useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Icon
import { Octicons, IonicIcon, Feather } from '@expo/vector-icons';

import SelectDropdown from 'react-native-select-dropdown'

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
} from "../components/styles"
import { Formik } from "formik";
import { StyleSheet, View, Text, Alert,Image } from "react-native";
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';

import CurryImagePicker from '../components/CurryImagePicker';
//Colors 
const { brand, blur, primary, secondary, black, darkLight } = Colors;
const data = ["admin", "phuc vu", "thu ngan",]
const DrinkAdding = ({ navigation }) => {

    setImage =(image)=>{
        props.setFielsValue('image', image.uri);
    }
    const urlCategory = "http://192.168.1.123:3000/api/category/list";
    useEffect(() => {
        getListCategory();
        // getDrinkById(id);
      }, []);
    const [listCategory, setListCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const getListCategory = async () => {
        await fetch(urlCategory)
          .then((res) => res.json())
          .then((res) => {
            // console.log("category: ");
            // console.log(res.data);
            var data = res.data;
            setListCategory(data);
          })
          .catch((err) => console.log("ERR", err));
      };
    const drink =(values)=>{
        // console.log(values);
        if (!values.name || !values.price ) {
            console.log("them khong thanh cong!");
            return;
        } 
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
            fetch('http://192.168.1.123:3000/api/drink/add', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(values),
            }).then(res=>res.json()).then(data =>{
                if (data.error) {
                    console .log(data.error);
                } else {
                    console.log(data.data);
                    Alert.alert("them thanh cong!");
                    return navigation.replace('Home');
                }
            })
        
    }
    const categories = listCategory.map((item, index) => {
        return <Text key={item._id}>{item.name}</Text>;
      });

      console.log(categories);
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
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br4.png')} ></OLPic>
                <FormUpdate style={styles.TouchableImage} >
                    <PageTitle>Adding Drink</PageTitle>
                    <Formik

                        initialValues={{image:'', name: '', price: '', category: '',}}
                        onSubmit={(values) => { console.log(values); }} >
                        {({ handleChange, handleBlur, HandleSubmit, values }) => (
                            <StyledFormArea>
                                <CurryImagePicker image ={values.image} onImagePicker={setImage}></CurryImagePicker>
                                <DrorpDownInput
                                    value={values.category}
                                    label="Category">

                                </DrorpDownInput>
                                <MyTextInput
                                    autofocus
                                    label="name"
                                    placeholder="name"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name} >
                                </MyTextInput>
                                <MyTextInput
                                    label="Price"
                                    placeholder="price"
                                    placeholderTextColor={blur}
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price}>
                                </MyTextInput>
                                
                                <Line />
                                <StyledButton
                                    onPress={() => {
                                        drink(values);
                                        // navigation.navigate('Home'),
                                        //     Alert.alert("Done Adding"),
                                            HandleSubmit
                                    }} >
                                    <ButtonText>
                                        Submit
                                        
                                    </ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik> 
                </FormUpdate>
            </InnerContainer>
        </StyledContainer>
    );
}
const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View >
            <UULabel>
                {label}
            </UULabel>
            <UUInput {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableImage: {
        padding: 20,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 60,
        backgroundColor: secondary,
        borderRadius: 5,
        marginVertical: 10,
        marginBottom: 10,
    },
    dropdown1BtnTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
    dropdown1DropdownStyle: {
        backgroundColor: secondary
    },
    dropdown1RowStyle: {
        backgroundColor: secondary,
        borderBottomColor: blur
    },
    dropdown1RowTxtStyle: {
        color: black,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
})

export default DrinkAdding;