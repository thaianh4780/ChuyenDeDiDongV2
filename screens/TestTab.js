import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import DrinkTab from '../components/DrinkTab';
import Home from '../screens/Home';
import DrinkChoosing from './DrinkChoosing';
import DrinkManagement from './DrinkManagement';
import UserManagement from './UserManagement';

const Tab = createMaterialTopTabNavigator();

const TestTab=()=> {
  return (
    <Tab.Navigator style={styles.contanner}  >
      <Tab.Screen name="Nước Uống" component={DrinkManagement} />
      <Tab.Screen name="Nhân Viên" component={UserManagement} />
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