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
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBtn from "./TabBtn";
//Colors 
const DrinkChoosing = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <ScrollView  >
                <StyledFormHome  >
                    <StyledDrinkTouchable style={styles.TouchableImage} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/capu.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
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

export default DrinkChoosing;