import React from "react";
import Button from '../components/Button';
import {
    StyledFormHome,
    StyledDrinkTouchable,
    StyledDrinkTouchableImage,
    StyledDrinkTouchableText,
    StyledDrinkTouchablePrice,
    StyledDrinkTouchableAdd,
    StyledDrinkTouchableDelete,
    StyledDrinkTouchableEdit,
    Line,
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//Colors 
const DrinkChoosing = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <ScrollView  >
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableAdd  onPress={() => navigation.navigate('DrinkAdding')} >
                            <Text style={styles.btnDrText}>Add</Text>
                        </StyledDrinkTouchableAdd>
                        <StyledDrinkTouchableDelete  onPress={() => navigation.navigate('DrinkUpdating')} >
                            <Text style={styles.btnDelete}>Delete</Text>
                        </StyledDrinkTouchableDelete>
                        <StyledDrinkTouchableEdit  onPress={() => Alert.alert("Deleted")} >
                            <Text style={styles.btnDrText}>Edit</Text>
                        </StyledDrinkTouchableEdit>
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <Line />
            <Button  onPress={() => navigation.navigate('Total')} title='Total' ></Button>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        flex:1,
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
    btnDrText: {
        position: "absolute",
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        top: -1,
        marginVertical:5,
        right:13,
    },
    btnDelete: {
        position: "absolute",
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        top: -1,
        marginVertical:5,
        right:4,
    },
});

export default DrinkChoosing;