import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdminManagement = (navigation) => {
    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <View style={{ flex: 1, backgroundColor: "green" }}>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                    <Text>hello world 1.........</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "yellow" }}>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                    <Text>hello world 2.........</Text>
                </View>
            </View>
        </View>
    )
}

export default AdminManagement

const styles = StyleSheet.create({})