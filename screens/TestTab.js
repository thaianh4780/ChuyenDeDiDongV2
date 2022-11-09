import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import DrinkTab from '../components/DrinkTab';
import Home from '../screens/Home';
import DrinkChoosing from './DrinkChoosing';
import DrinkManagement from './DrinkManagement';

const Tab = createMaterialTopTabNavigator();

const TestTab=()=> {
  return (
    <Tab.Navigator style={styles.contanner}  >
      <Tab.Screen name="Nước Uống" component={DrinkManagement} />
      <Tab.Screen name="Nhân Viên" component={DrinkChoosing} />
      <Tab.Screen name="Doanh Thu" component={DrinkChoosing} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  contanner:{
    backgroundColor: '#FFFFFF',
    flex:1
  }
})

export default TestTab;