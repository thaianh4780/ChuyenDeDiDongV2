import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import DrinkTab from '../components/DrinkTab';
import Home from '../screens/Home';
import DrinkChoosing from './DrinkChoosing';

const Tab = createMaterialTopTabNavigator();

const TestTab=()=> {
  return (
    <Tab.Navigator style={styles.contanner}  >
      <Tab.Screen name="Nước Uống" component={DrinkTab} />
      <Tab.Screen name="Settings" component={DrinkChoosing} />
      <Tab.Screen name="NhanVien" component={DrinkChoosing} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  contanner:{
    backgroundColor: '#FFFFFF',
  }
})

export default TestTab;