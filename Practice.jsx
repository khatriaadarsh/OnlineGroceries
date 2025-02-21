import {
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';

const Practice = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme == 'dark';
  const backgroundColor = isDarkTheme ? 'black' : 'gray';
  const textColor = backgroundColor ? 'white' : 'black';
  return (
    <SafeAreaView style={[style.container, {backgroundColor: backgroundColor}]}>
      <Text style={[style.heading, {color: textColor}]}>Hello Application</Text>
      <Image
        style={{width: 300, height: 300}}
        source={{
          uri: 'https://images.unsplash.com/photo-1645353482753-f062923499af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Button title="Simple Button"></Button>
      <TouchableOpacity
        style={style.btn01}
        onPress={() => Alert.alert('Button Pressed')}>
        <Text>Touable Button</Text>
      </TouchableOpacity>
      <Pressable style={style.btn02}>
        <Text>Pressable Button</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Practice;

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 5,
  },
  btn01: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  btn02: {
    backgroundColor: 'lightgrey',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
  },
});
