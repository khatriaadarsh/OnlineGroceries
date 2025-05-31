import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/onboardImage.png')}
        style={styles.image}
      />

      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="carrot"
          size={86}
          color="white"
          style={styles.vectorIcons}
        />

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>to our store</Text>

        <Text style={styles.subTitle}>
          Get your groceries in as fast as one hour
        </Text>

        <Pressable
          style={styles.getStartBtn}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    position: 'absolute',
    bottom: 100,
  },
  vectorIcons: {
    textAlign: 'center',
    transform: [{rotate: '40deg'}],
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    letterSpacing: 2.5,
    fontWeight: 'bold',
  },
  subTitle: {
    letterSpacing: 1.5,
    color: 'white',
  },
  getStartBtn: {
    backgroundColor: '#53B186',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 15,
  },
});
