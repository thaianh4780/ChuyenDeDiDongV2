// import React, { Component, useState } from 'react';
// import { View, StyleSheet, FlatList, Alert, Text } from 'react-native';
// import { StyledHomeBrownImage, TouchableHomeImage } from '../components/styles';

// const name = [{ key: 'a' },
// { key: 'b' },
// { key: 'c' },
// { key: 'd' },
// { key: 'e' },
// { key: 'f' },
// { key: 'g' },
// { key: 'h' },
// { key: 'i' },
// { key: 'j' }]


// export default class TestTable extends Component {

//     renderItem({ item, index }) {
//         return <View style={{
//             flex: 1,
//             margin: 5,
//             minWidth: 170,
//             maxWidth: 223,
//             height: 304,
//             maxHeight: 304,
//             backgroundColor: '#CCC',
//         }}>
//             <TouchableHomeImage onPress={() => {
//                 // navigation.navigate('Login'),
//                 Alert.alert("Already Log out")
//             }}
//             >
//                 <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} />
//             </TouchableHomeImage>
//             <Text style={{ fontSize: 20, marginHorizontal: "3%", justifyContent: 'center', alignItems: 'center' }}>{item.key}</Text>
//         </View>

//     }
//     render() {
//         return (
//             <FlatList
//                 contentContainerStyle={styles.list}
//                 data={name}
//                 renderItem={this.renderItem}
//             />
//         );
//     }
// }

// const styles = StyleSheet.create({
//     list: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     }
// });

// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, Alert, Dimensions } from 'react-native';
import { Colors, LayoutTable, PageTitle, StyledHomeBrownImage, TableArea, TableName, TouchableHomeImage } from '../components/styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { brand, darkLight, primary, blur, neon_light_brand } = Colors;

const App = (navigation) => {
    const [dataSource, setDataSource] = useState([]);

    // useState(() => {
    //     let items = Array.apply(null, Array(60)).map((v, i) => {
    //         return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    //     });
    //     setDataSource(items);
    // }, []);

    const data = [{ key: 'Bàn 1' },
    { key: 'Bàn 2' },
    { key: 'Bàn 3' },
    { key: 'Bàn 4' },
    { key: 'Bàn 5' },
    { key: 'Bàn 6' },
    { key: 'Bàn 7' },];

    return (
        <SafeAreaView style={styles.container}>
            <PageTitle style={{color: primary}}>TableChoosing</PageTitle>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <LayoutTable style={styles.TouchableImage}>
                            <MaterialCommunityIcons style={styles.icons} name='desk' />
                            <View style={styles.text}>
                                <TableName>{item.key}</TableName>
                                <TableArea>{item.key}</TableArea>
                            </View>
                        </LayoutTable>
                    </View>
                )}
                numColumns={2}
            />
        </SafeAreaView>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: brand,
    },
    icons: {
        fontSize: 140,
        color: brand,
        marginHorizontal: "4%",
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        marginTop: "-5%"
    },
    TouchableImage: {
        elevation: 10,
        shadowColor: "#1F2937",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
});
