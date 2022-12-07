import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Fontisto, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from '../components/styles';
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';

const { brand, darkLight, black, primary, secondary, blue } = Colors;

const TestThang = () => {
    return (
        <View style={styles.container}>
            <View style={styles.threeBtn}>
                <TouchableOpacity style={styles.leftBtn}>
                    <MaterialCommunityIcons name="bookmark-multiple" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftBtn}>
                    <MaterialCommunityIcons name="arrow-up-bold-circle" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftBtn}>
                    <MaterialCommunityIcons name="arrow-down-bold-circle" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.dropdown}>
                <TouchableOpacity style={styles.addBtn}>
                    <MaterialCommunityIcons name="water-plus" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.styleAddBtn}>
                <TouchableOpacity style={styles.addBtn}>
                    <MaterialCommunityIcons name="water-plus" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TestThang

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginTop: "20%",
    },
    threeBtn: {
        flex: .3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftBtn: {
        width: "50%",
        height: "7%",
        borderRadius: 5,
        backgroundColor: brand,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "2%",
    },
    icon: {
        fontSize: "30%",
        color: primary,
    },
    dropdown: {
        flex: .4,
        alignItems: "center",
    },
    styleAddBtn: {
        flex: .3,
        alignItems: "center",
    },
    addBtn: {
        width: "50%",
        height: "7%",
        backgroundColor: blue,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
})