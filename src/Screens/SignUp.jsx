import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="left"
        size={28}
        color="#333"
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />
      <MaterialCommunityIcons
        name="carrot"
        size={90}
        color="orange"
        style={styles.vectorIcons}
      />
      <View style={styles.textContainr}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Enter your credentials to continue</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },
  vectorIcons: {
    position: 'absolute',
    top: '10%',
    left: '38%',
    transform: [{rotate: '45deg'}],
  },
  leftArrowIcon: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  textContainr: {
    position: 'absolute',
    top: '23%',
    left: '5%',
    gap: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 15,
    color: 'gray',
  },
});
