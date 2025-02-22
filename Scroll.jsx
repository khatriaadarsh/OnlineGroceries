import {StyleSheet, Text, StatusBar, View, ScrollView} from 'react-native';
import React from 'react';
// import Practice from './Practice';
const Scroll = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{gap: 10}}
      horizontal>
      {/* <Practice /> */}
      {/* <Text style={styles.text}>App</Text> */}
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
    </ScrollView>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // alignContent: 'center', //Apply when we add flexWrap
    // gap: 10,
    // flexWrap: 'wrap',
  },
  box01: {
    // flexGrow: 1,
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  box02: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    borderRadius: 50,
  },
  box03: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
