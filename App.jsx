import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Practice from './Practice';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Practice /> */}
      {/* <Text style={styles.text}>App</Text> */}
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  box01: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  box02: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
  },
  box03: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
  },
});
