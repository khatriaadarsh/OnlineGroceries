import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import {CountryCode} from './CountryCode';
const SignIn = () => {
  //   const [phoneNumber, setPhoneNumber] = useState('');
  //   const [countryCode, setCountryCode] = useState('+1');
  //   const [countryModalVisible, setCountryModalVisible] = useState(false);
  //   const [selectedCountry, setSelectedCountry] = useState({
  //     name: 'United States',
  //     code: 'US',
  //     dial_code: '+1',
  //   });
  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image source={require('../Images/signin.png')} style={styles.image} />
        <Text style={styles.imageText}>nectar</Text>
      </View>
      <View style={styles.inputandBtnContainer}>
        <Text style={styles.text}>Get your groceries with nectar</Text>
        {/* Country Code Picker */}
        {/* <Pressable
          style={styles.countryCodeButton}
          onPress={() => setCountryModalVisible(true)}>
          <Text style={styles.flagText}>{selectedCountry.flag}</Text>
          <Text style={styles.codeText}>{selectedCountry.code}</Text>
        </Pressable> */}

        {/* Phone Number Input
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        /> */}
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    position: 'absolute',
    transform: [{rotate: '220deg'}],
    top: 0,
    left: 100,
    right: -90,
    bottom: 390,
  },
  image: {
    width: 600,
    height: 650,
  },
  imageText: {
    position: 'absolute',
    top: '75%',
    left: '65%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  inputandBtnContainer: {},
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    marginRight: 10,
  },
  flagText: {
    fontSize: 20,
    marginRight: 5,
  },
});
