import React from "react";
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
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import TabBtn from "./TabBtn";
//Colors 
const UserManagement = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <SafeAreaView>
                <ScrollView  >
                    <StyledFormHome  >
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                        <StyledDrinkTouchable style={styles.TouchableImage} >
                            <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/u3.png')} ></StyledDrinkTouchableImage>
                            <SDTText> Username</SDTText>
                            <SDTPrice>Password</SDTPrice>
                            <StyledDrinkTouchableAdd onPress={() => navigation.navigate('DrinkAdding')} >
                                <SDTBtnText>Add</SDTBtnText>
                            </StyledDrinkTouchableAdd>
                            <StyledDrinkTouchableDelete onPress={() => Alert.alert("Deleted")}>
                                <SDTBtnText>Delete</SDTBtnText>
                            </StyledDrinkTouchableDelete>
                            <StyledDrinkTouchableEdit onPress={() => navigation.navigate('DrinkUpdating')}  >
                                <SDTBtnText>Edit</SDTBtnText>
                            </StyledDrinkTouchableEdit>
                        </StyledDrinkTouchable>
                    </StyledFormHome>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    twocl: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
});

export default UserManagement;