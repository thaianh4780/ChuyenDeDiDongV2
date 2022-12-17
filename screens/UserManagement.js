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
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
//Colors
const UserManagement = ({ navigation }) => {
  //Values
  const [listUser, setListUser] = useState([]);
  const isFocused = useIsFocused();
  const [check, setCheck] = useState(false);
  const [type, setType] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [textD, setTextD] = useState("");
  const [listRole, setListRole] = useState([""]);
  const [listUserByRole, setListUserByRole] = useState([""]);
  const [listSortUserOnName, setListSortUserOnName] = useState([]);
  //load screen if delete
  useEffect(() => {
    getListUser();
    getAllRole();
  }, [check, isFocused]);

  //load screen user by role
  useEffect(() => {
    if (type) {
      getListUserByRole();
      defaultDropdown(type);
    } else {
      getListUser();
    }
  }, [type, check, isFocused]);
  //load screen list sort users
  useEffect(() => {
    if (typeSort) {
      getListSortUserOnName();
    }
  }, [typeSort, isFocused]);

  // get list user by role id
  const getListUserByRole = async () => {
    await fetch(url + "user/role/" + type)
      .then((res) => res.json())
      .then((res) => {
        setListUserByRole(res.data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //get list sort user 
  const getListSortUserOnName = async () => {
    await fetch(url + "user/" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        setListSortUserOnName(res.data);
      })
      .catch((err) => console.log("ERR", err));
  };
  
  //get list user
  const getListUser = async () => {
    await fetch(url + "user/all")
      .then((res) => res.json())
      .then((res) => {
        var data = res;
        setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //delete user by id and alert
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
    fetch(url + "user/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCheck(!check);
        }
      });
  };
  //get all role
  const getAllRole = async () => {
    await fetch(url + 'role/all')
      .then((res) => res.json())
      .then((res) => {
        var data = res;
        setListRole(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  //list role
  const getIdRole = listRole.map((item, index) => {
    return <Text key={item._id}>{item.role_name}</Text>;
  });
  //default list role
  const defaultDropdown = async (type) => {
    if (type) {
      listRole.map((role, index) => {
        if (role._id == type) {
          setTextD(role.role_name);
        }
      })
    } else {
      return textD = "Select an option.";
    }
  };
  //dropdown
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
          data={getIdRole}
          onSelect={(item, index) => {
            setType(item.key);
          }}
          //Select an option.
          defaultButtonText={
            textD
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
  //users
  const users = listUser.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={require("../assets/image/u3.png")}
        ></StyledDrinkTouchableImage>
        <SDTText> {item.user_name}</SDTText>
        {/* <SDTPrice>{item.role.role_name}</SDTPrice> */}
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
  });

  const usersByRole = listUserByRole.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={require("../assets/image/u3.png")}
        ></StyledDrinkTouchableImage>
        <SDTText> {item.user_name}</SDTText>
        {/* <SDTPrice>{item.role.role_name}</SDTPrice> */}
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
  });

  const usersSort = listSortUserOnName.map((item) => {
    return (
      <StyledDrinkTouchable style={styles.TouchableImage}>
        <StyledDrinkTouchableImage
          resizeMode="cover"
          source={require("../assets/image/u3.png")}
        ></StyledDrinkTouchableImage>
        <SDTText> {item.user_name}</SDTText>
        {/* <SDTPrice>{item.role.role_name}</SDTPrice> */}
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
  });

  //setup check
  const checkKey = () => {
    setType(null), setCheck(!check), setTypeSort(null);
  };
  //check user management is have type
  const checkType = () => {
    console.log(typeSort);
    if (type) {
      return usersByRole;
    } else if (typeSort) {
      return usersSort;
    } else {
      return users;
    }
  };
  //font end
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "2%",
            marginBottom: "5%",
          }}>
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
              }}>
              <MaterialCommunityIcons
                name="arrow-up-bold-circle"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.leftBtn}
              onPress={() => {
                setType(null), setTypeSort("sortDecrease");
              }}>
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
                navigation.navigate("UserAdding");
              }}>
              <MaterialCommunityIcons name="water-plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <StyledFormHome>
            {checkType()}
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
    width: 200,
    borderWidth: 1.5,
    borderColor: brand,
    position: "absolute",
    left: -107,
    borderRadius: 5,
    backgroundColor: primary,
  },
});

export default UserManagement;
