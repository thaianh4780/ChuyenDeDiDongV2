import React from 'react';
import { render } from 'react-dom';
import { FlatList, Dimensions } from 'react-native';
import { StyleSheet, Text, View} from 'react-native-web';

const dataList =[{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'},{key:10}]

const numColumn=2
const WIDHT = Dimensions.get('window').width
const TableChoosing = ({ navigation }) => {
    formatData = (dataList,numColumn)=>{
        const totalRow = Math.floor(data.length/numColumn)
        let totalLastRow  = dataList.length -(totalRow * numColumn)

        while (totalLastRow !== 0&& tatalLastRow !== numColumn){
            dataList.push({key:'blank', empty: true})
            totalLastRow++

        }
        return dataList
        
    }
    _renderItem =({item, index})=>{
        let {itemStyle, itemText, itemInvisible} = style
        if(item.empty){
            return (
                <View style={itemStyle}>
                    <Text style={itemText}>{item.key}</Text>
                </View>
            )

        }
        return (
            <View style={itemStyle}>
                <Text style={itemText}>{item.key}</Text>
            </View>
        )

    }
    render= ()=>{
        let {container}= styles
        return (
            <SafeAreaView  >
                
                <View style={container} >
                    <FlatList 
                    data={this.formatData(dataList, numColumn)}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumn}
                    />
                </View>
                    
    
                <Button onPress={() => navigation.navigate('DrinkChoosing')} title='DrinkChoosing' ></Button>
            </SafeAreaView>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemStyle: {
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        flex: 1,
        margin: 1,
        height: WIDHT / numColumn
    },
    itemText:{
        color:'#fff',
        fontSize: 30
    },
    itemInvisible:{
        backgroundColor: 'transparent'
    },

})

export default TableChoosing 