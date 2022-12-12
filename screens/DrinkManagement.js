import React, { useState, useEffect } from "react";
import { Fontisto, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  StyledFormHome,
  StyledDrinkTouchable,
  StyledDrinkTouchableImage,
  SDTText,
  SDTPrice,
  StyledDrinkTouchableAdd,
  SDTBtnText,
  StyledDrinkTouchableDelete,
  StyledButton,
  ButtonText,
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
  TouchableOpacity,
} from "react-native";
import TabBtn from "./TabBtn";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "../components/Button";
import url from "../Url";

const { brand, darkLight, black, primary, blue } = Colors;

//Colors
const DrinkManagement = ({ navigation, route }) => {
  const [listDrink, setListDrink] = useState([]);

  //check load dữ liệu tất cả đồ uống
  const [check, setCheck] = useState(false);

  //load dữ liệu tất cả category
  const [listCategory, setListCategory] = useState([]);

  // check load category
  const [type, setType] = useState("");

  // check load sort On Price
  const [typeSort, setTypeSort] = useState("");

  // đồ uống theo danh mục
  const [listDrinkByCategory, setListDrinkByCategory] = useState([]);
  const [listSortDrinkOnPrice, setListSortDrinkOnPrice] = useState([]);

  // chạy dữ liệu 1 lần đầu
  useEffect(() => {
    getListCategory();
  }, []);

  // chạy dữ liệu khi có sự thay đổi
  // useEffect(() => {
  //   getListDrink();
  // }, [check]);

  useEffect(() => {
    if (type) {
      getListDrinkByCategory();
    } else {
      getListDrink();
    }
  }, [type, check]);

  useEffect(() => {
    if (typeSort) {
      getListDrinkOnPrice();
    }
  }, [typeSort]);

  // lấy các danh mục ra
  const getListCategory = async () => {
    await fetch(url + "category/list")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        var data = res.data;
        setListCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy các đồ uống thuộc 1 danh mục
  const getListDrinkByCategory = async () => {
    await fetch(url + "drink/category/" + type)
      .then((res) => res.json())
      .then((res) => {
        // console.log("drink by category: ");
        // console.log(res.data);
        var data = res.data;
        setListDrinkByCategory(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // lấy tất cả đồ uống
  const getListDrink = async () => {
    await fetch(url + "drink/list")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        var data = res.data;
        //setCheck(check + 1);
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //.

  const createTwoButtonAlert = (id) =>
    Alert.alert("Thông báo", "bạn có chắc muốn xóa không", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteDrink(id) },
    ]);

  const deleteDrink = async (id) => {
    await fetch(url + "drink/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCheck(!check);
      })
      .catch((err) => console.log("ERR", err));
  };

  //
  const getListDrinkOnPrice = async () => {
    await fetch(url + "drink/" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;

        setListSortDrinkOnPrice(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  // xuất danh mục xuống dropdown
  const dataCategory = listCategory.map((item) => {
    return <Text key={item._id}>{item.name}</Text>;
  });

  // xuất các đồ uống thuộc 1 danh mục xuống giao diện
  const listDrinkCategory = listDrinkByCategory.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText numberOfLines={1}>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableDelete
          onPress={() => createTwoButtonAlert(item._id)}
        >
          <MaterialCommunityIcons name="trash-can" style={styles.icon} />
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <MaterialCommunityIcons name="tooltip-edit" style={styles.icon} />
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  const drinkOnPrice = listSortDrinkOnPrice.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText numberOfLines={1}>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableDelete
          onPress={() => createTwoButtonAlert(item._id)}
        >
          <MaterialCommunityIcons name="trash-can" style={styles.icon} />
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <MaterialCommunityIcons name="tooltip-edit" style={styles.icon} />
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  // console.log("category: ");
  // console.log(listCategory);

  const DrorpDownInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <SelectDropdown
          buttonStyle={styles.dropDown}
          buttonTextStyle={{ color: brand, marginLeft: -5 }}
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
          data={dataCategory}
          onSelect={(item, index) => {
            // setCategoryId(item.key);
            setType(item.key);
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

  // xuất các đồ uống xuống giao diện
  const drinks = listDrink.map((item, index) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={{ uri: `${item.image}` }}
        ></StyledDrinkTouchableImage>
        <SDTText numberOfLines={1}>{item.name}</SDTText>
        <SDTPrice>{item.price}$</SDTPrice>
        <StyledDrinkTouchableDelete
          onPress={() => createTwoButtonAlert(item._id)}
        >
          <MaterialCommunityIcons name="trash-can" style={styles.icon} />
        </StyledDrinkTouchableDelete>
        <StyledDrinkTouchableEdit
          onPress={() => {
            navigation.navigate("DrinkUpdating", {
              id: item._id,
            }),
              setCheck(!check);
          }}
        >
          <MaterialCommunityIcons name="tooltip-edit" style={styles.icon} />
        </StyledDrinkTouchableEdit>
      </StyledDrinkTouchable>
    );
  });

  // check xem có đang chọn 1 danh mục nào hay không ?
  const checkType = () => {
    console.log(typeSort);
    if (type) {
      return listDrinkCategory;
    } else if (typeSort) {
      return drinkOnPrice;
    } else {
      return drinks;
    }
  };

  const checkKey = () => {
    setType(null), setCheck(!check), setTypeSort(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "2%",
          marginBottom: "5%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => {
              checkKey();
            }}
          >
            <MaterialCommunityIcons
              name="bookmark-multiple"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => {
              setType(null), setTypeSort("sortIncrease");
            }}
          >
            <MaterialCommunityIcons
              name="arrow-up-bold-circle"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.leftBtn}
            onPress={() => {
              setType(null), setTypeSort("sortDecrease");
            }}
          >
            <MaterialCommunityIcons
              name="arrow-down-bold-circle"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <DrorpDownInput />
        <View>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              navigation.navigate("DrinkAdding");
            }}
          >
            <MaterialCommunityIcons name="water-plus" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>{checkType()}</ScrollView>
    </SafeAreaView>
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
    left: -103,
    borderRadius: 5,
    backgroundColor: primary,
  },
});

export default DrinkManagement;
