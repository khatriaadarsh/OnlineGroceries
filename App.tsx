import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Onboarding from './src/Screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/Screens/SignIn';
import PhoneNumber from './src/Screens/PhoneNumber';
import Verification from './src/Screens/Verification';
import SelectLocation from './src/Screens/SelectLocation';
import Login from './src/Screens/Login';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})