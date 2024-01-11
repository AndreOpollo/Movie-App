
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import AppNavigation from './navigation/AppNavigation';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    
      <AppNavigation/>
    
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
