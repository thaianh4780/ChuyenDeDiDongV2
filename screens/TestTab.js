import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { Colors } from "../components/styles";
import AdminManagement from "./AdminManagement";
import DrinkManagement from "./DrinkManagement";
import UserManagement from "./UserManagement";

const Tab = createMaterialTopTabNavigator();
const { brand, darkLight, black, primary, secondary } = Colors;
const TestTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Critic"}
      tabBarOptions={{
        activeTintColor: brand,
        inactiveTintColor: black,
        indicatorStyle: {
          height: 2.1,
          borderRadius: 10,
          width: 10,
          backgroundColor: brand,
          marginHorizontal: "8.5%",
        },
        labelStyle: {
          fontSize: 14,
          marginTop: 15,
          fontWeight: "bold",
          marginBottom: -0.125,
        },
      }}
    >
      <Tab.Screen name="Nước Uống" component={DrinkManagement} />
      <Tab.Screen name="Nhân Viên" component={UserManagement} />
      <Tab.Screen name="Doanh Thu" component={AdminManagement} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  contanner: {
    backgroundColor: primary,
    flex: 1,
  },
});

export default TestTab;
