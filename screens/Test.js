import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, } from 'react-native';
import Button from '../components/Button';
import { StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone, StyledTouchable, StyledTouchableImage, StyledTouchableText } from '../components/styles';
import { Fontisto } from "@expo/vector-icons";
import TestTab from './TestTab';
import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary, neon_blur, light_brand } = Colors;
import { DataTable } from 'react-native-paper';

//note : justifyContent: 'center' : theo height || alignItems: 'center' : theo width || alignItems: 'center'
//note : 2 cai tren chi co tac dung voi the cha chua no || ko dung dc trong ScrollView

const Test = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <DataTable style={styles.container}>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Favourite Food</DataTable.Title>
                        <DataTable.Title>Age</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Radhika</DataTable.Cell>
                        <DataTable.Cell>Dosa</DataTable.Cell>
                        <DataTable.Cell>23</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Krishna</DataTable.Cell>
                        <DataTable.Cell>Uttapam</DataTable.Cell>
                        <DataTable.Cell>26</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Vanshika</DataTable.Cell>
                        <DataTable.Cell>Brownie</DataTable.Cell>
                        <DataTable.Cell>20</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Teena</DataTable.Cell>
                        <DataTable.Cell>Pizza</DataTable.Cell>
                        <DataTable.Cell>24</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    TouchableImage: {
        elevation: 1,
        padding: 20,
        backgroundColor: light_brand,
        shadowColor: black,
        shadowOpacity: .5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        marginTop: "10%",
    },
    img: {
        paddingHorizontal: 50
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
})
export default Test 