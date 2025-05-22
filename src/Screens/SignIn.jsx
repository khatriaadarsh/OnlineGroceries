import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CountryCode} from './CountryCode';
import Icon from 'react-native-vector-icons/FontAwesome';
const SignIn = ({navigation}) => {
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    code: 'Select your country',
    dial_code: '+1',
  });

  const handleCountrySelect = item => {
    setSelectedCountry(item);
    setCountryModalVisible(false);
    if (item.code !== 'Select your country') {
      navigation.navigate('PhoneNumber', {
        countryCode: item.dial_code,
        countryName: item.name,
        countryFlag: item.flag,
      });
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image source={require('../Images/signin.png')} style={styles.image} />
        <Text style={styles.imageText}>nectar</Text>
      </View>
      <View style={styles.inputandBtnContainer}>
        <Text style={styles.text}>Get your groceries with nectar</Text>
        {/* Country Code Picker */}
        <Pressable
          style={styles.countryCodeButton}
          onPress={() => setCountryModalVisible(true)}>
          <Text style={styles.flagText}>{selectedCountry.flag}</Text>
          <Text style={styles.codeText}>{selectedCountry.code}</Text>
        </Pressable>

        {/* Country Selection Modal */}
        <Modal
          visible={countryModalVisible}
          animationType="slide"
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={CountryCode}
                keyExtractor={item => item.code}
                renderItem={({item}) => (
                  <Pressable
                    style={styles.countryItem}
                    onPress={() => {
                      handleCountrySelect(item);
                    }}>
                    <Text style={styles.countryFlag}>{item.flag}</Text>
                    <Text style={styles.countryName}>{item.name}</Text>
                    <Text style={styles.countryCode}>{item.code}</Text>
                  </Pressable>
                )}
              />
            </View>
          </View>
        </Modal>
        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            fontSize: 14,
            letterSpacing: 1,
            marginTop: 8,
          }}>
          Or connect with social media
        </Text>
        <View style={styles.btnContainer}>
          <Pressable style={styles.contWithGoogleButton}>
            <Icon
              name="google"
              size={22}
              color="#ffff"
              style={{marginRight: 8}}
            />
            <Text style={styles.contWithGoogleText}>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.contWithFacebookButton}>
            <Icon
              name="facebook"
              size={22}
              color="#ffff"
              style={{marginRight: 8}}
            />
            <Text style={styles.contWithFacebookText}>
              Continue with Facebook
            </Text>
          </Pressable>
        </View>
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
  inputandBtnContainer: {
    position: 'absolute',
    gap: 8,
    top: '56%',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 30,
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  flagText: {
    fontSize: 20,
    marginRight: 5,
  },
  codeText: {
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 8,
    maxHeight: '70%',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryFlag: {
    fontSize: 20,
    width: 30,
  },
  countryName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  countryCode: {
    fontSize: 16,
    color: '#666',
  },
  btnContainer: {
    marginTop: 40,
    gap: 22,
    paddingVertical: 10,
  },
  contWithGoogleButton: {
    backgroundColor: '#5383EC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 18,
    paddingVertical: 18,
  },
  contWithGoogleText: {
    color: '#ffff',
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  contWithFacebookButton: {
    backgroundColor: '#4A66AC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 18,
    paddingVertical: 18,
  },
  contWithFacebookText: {
    color: '#ffff',
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
