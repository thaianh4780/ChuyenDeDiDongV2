import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, SHBZ, StyledTouchable, StyledTouchableImage, StyledTouchableText, StyledContainer, InnerContainer, OLPic, TableStyled, PageTitle, StyledButton, ButtonText } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary, neon_blur, light_brand } = Colors;
import { DataTable } from 'react-native-paper';

//note : justifyContent: 'center' : theo height || alignItems: 'center' : theo width || alignItems: 'center'
//note : 2 cai tren chi co tac dung voi the cha chua no || ko dung dc trong ScrollView

const TotailExpenditure = ({ navigation }) => {
    return (
        <StyledContainer >
            <InnerContainer>
                <OLPic resizeMode="cover" source={require('../assets/image/br4.png')} ></OLPic>
                <TableStyled style={styles.TouchableImage} >
                    <PageTitle>Totail Expenditure</PageTitle>
                    <ScrollView style={styles.scrollView}>
                        <DataTable style={styles.container1}>
                            <DataTable.Header style={styles.tableHeader}>
                                <DataTable.Title >Material </DataTable.Title>
                                <DataTable.Title style={styles.text} >Number</DataTable.Title>
                                <DataTable.Title style={styles.text}>Date</DataTable.Title>
                                <DataTable.Title style={styles.text}>Total</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>Đường</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >1 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>30$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Cafe</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >4 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>180$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Milk</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >5 Box</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>70$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Đường</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >1 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>30$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Cafe</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >4 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>180$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Milk</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >5 Box</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>70$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Đường</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >1 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>30$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Cafe</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >4 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>180$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Milk</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >5 Box</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>70$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Đường</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >1 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>30$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Cafe</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >4 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>180$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Milk</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >5 Box</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>70$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Đường</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >1 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>30$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Cafe</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >4 Bag</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>180$</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Milk</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >5 Box</DataTable.Cell>
                                <DataTable.Cell style={styles.text} >10/2/2022</DataTable.Cell>
                                <DataTable.Cell style={styles.text}>70$</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", }}>
                        <StyledButton
                            onPress={() => {
                                navigation.navigate('Home')
                            }} >
                            <ButtonText>
                                Submit
                            </ButtonText>
                        </StyledButton>
                        <StyledButton
                            onPress={() => {
                                navigation.navigate('TotalInput')
                            }} >
                            <ButtonText>
                                Add
                            </ButtonText>
                        </StyledButton>
                    </View>
                </TableStyled>
            </InnerContainer>
        </StyledContainer>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },
    container1: {
        borderRadius: 10,
        backgroundColor: primary,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TouchableImage: {
        elevation: 1,
        padding: 10,
        backgroundColor: primary,
        shadowColor: black,
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
})
export default TotailExpenditure 