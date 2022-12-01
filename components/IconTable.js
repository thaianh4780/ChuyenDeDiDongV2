import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, LayoutTable, TableArea, TableName } from './styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";



const { brand, darkLight, primary, blur } = Colors;

const IconTable = () => {
  return (
    <SafeAreaView>
      <LayoutTable>
        <MaterialCommunityIcons style={styles.icons} name='desk' />
        <View>
          <TableName></TableName>
          <TableArea></TableArea>
        </View>
      </LayoutTable>
    </SafeAreaView>
  )
}

export default IconTable

const styles = StyleSheet.create({
  icons: {
    fontSize: 140,
    color: '#a85b3c',
    marginHorizontal: 20,
  },
  
})