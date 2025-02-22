import React from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Hello Bhai</Text>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
