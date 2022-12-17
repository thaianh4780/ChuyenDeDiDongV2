import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { DataTable } from 'react-native-paper';
import Button from '../components/Button';
import { ButtonText, Colors, InnerContainer, OLPic, PageTitle, StyledButton, StyledContainer, TableStyled } from '../components/styles';
const { brand, darkLight,black ,primary, secondary} = Colors;

const DateRegist= ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <StyledContainer >
        <InnerContainer>
            <OLPic resizeMode="cover" source={require('../assets/image/a.png')} ></OLPic>
            <TableStyled style={styles.TouchableImage} >
                <PageTitle>Date Regist</PageTitle>
                <ScrollView style={{ width: '100%', height: '100%', flex: 1 }} horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  >
                    <DataTable style={styles.container1}>
                        <DataTable.Header style={styles.tableHeader}>
                            <DataTable.Title style={styles.text}>Date</DataTable.Title>
                            <DataTable.Title style={styles.text}>1: 7h-11h</DataTable.Title>
                            <DataTable.Title style={styles.text}>2: 11h-2h</DataTable.Title>
                            <DataTable.Title style={styles.text}>3: 2h-6h</DataTable.Title>
                            <DataTable.Title style={styles.text}>4: 6h -10h</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Monday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Tuesday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Wednesday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Thursday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Friday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Saturday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row  >
                            <DataTable.Cell style={styles.text} >Sunday</DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.text} >
                                 <Checkbox style={styles.checkbox} boxType="square" value={isChecked} onValueChange={setChecked} />
                            </DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </ScrollView>
                <StyledButton
                    onPress={() => {
                        navigation.navigate('Home')
                    }} >
                    <ButtonText >
                        Submit
                    </ButtonText>
                </StyledButton>
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
        width: "100%",
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        justifyContent: 'space-between',
        textAlign:"center",
        alignItems: 'center',
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
        width: 100,
        // backgroundColor: brand,
    },
})
export default DateRegist