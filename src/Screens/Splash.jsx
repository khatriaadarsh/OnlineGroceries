import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Splash = () => {
  return (
    <View style={styles.container}>
      <Icon name="shopping-cart" size={65} color="#fff" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>nectar</Text>
        <Text style={styles.subTitle}>Online Groceries</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175',
    flexDirection: 'row',
    gap: 15,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
  },
});
