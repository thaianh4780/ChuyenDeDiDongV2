import React from "react";
import {
    StyledFormHome,
    StyledDrinkTouchable,
    StyledDrinkTouchableImage,
    SDTText,
    SDTPrice,
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBtn from "../components/TabBtn";
//Colors 
const DrinkChoosing = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <ScrollView  >
                <StyledFormHome  >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <SDTText> Cà Phê Đá</SDTText>
                        <SDTPrice>50$</SDTPrice>
                       <TabBtn></TabBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
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
});

export default DrinkChoosing;