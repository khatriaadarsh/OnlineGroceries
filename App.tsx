import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Onboarding from './src/Screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/Screens/SignIn';
import PhoneNumber from './src/Screens/PhoneNumber';
import Verification from './src/Screens/Verification';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})