import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PhoneNumber = ({navigation, route}) => {
  const {countryCode, countryFlag} = route.params || {};
  const [phoneNumber, setPhoneNumber] = useState('');
  const inputRef = useRef(null);

  // Handle key press from custom keypad
  const handleKeyPress = key => {
    if (key === 'backspace') {
      setPhoneNumber(prev => prev.slice(0, -1));
    } else {
      setPhoneNumber(prev => prev + key);
    }
  };

  // Custom Keypad Component
  const PhoneKeypad = () => {
    const keys = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['*', '0', '#'],
    ];

    return (
      <View style={styles.keypadContainer}>
        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(key => (
              <TouchableOpacity
                key={key}
                style={styles.button}
                onPress={() => handleKeyPress(key)}>
                <Text style={styles.buttonText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <Pressable
          style={[styles.button, {marginLeft: 150}]}
          onPress={() => handleKeyPress('backspace')}>
          <Text style={styles.buttonText}>⌫</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Back Screen Button */}
      <AntDesign
        name="left"
        size={25}
        color="#333"
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />

      {/* Header Section */}
      <View style={styles.topPartContainer}>
        <Text style={styles.textForPromptNum}>Enter your phone number</Text>
        <Text style={styles.mobileNumber}>Mobile Number</Text>

        {/* Phone Input */}
        <View style={styles.inputTextContainer}>
          <Text style={styles.countryCodeText}>
            {countryFlag ? `${countryFlag} ` : ''}
            {countryCode ? `${countryCode} ` : ''}
          </Text>
          <TextInput
            ref={inputRef}
            value={phoneNumber}
            placeholder="Phone number"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={styles.phoneInput}
            showSoftInputOnFocus={false} // This prevents default keyboard
            // Keep focus handling
          />
        </View>

        {/* Go to Verification Screen Button */}
        <Pressable>
          <AntDesign
            name="right"
            size={25}
            color="#ffff"
            style={styles.rightArrowIcon}
            onPress={() => {
              // Format validation: phone number should be 10 digits
              const formattedNumber = phoneNumber.replace(/\D/g, '');
              if (formattedNumber.length === 10) {
                // Format the number as XXX-XXX-XXXX before navigating
                const displayNumber = formattedNumber.replace(
                  /(\d{3})(\d{3})(\d{4})/,
                  '$1-$2-$3',
                );
                navigation.navigate('Verification', {
                  phoneNumber: displayNumber,
                });
              } else {
                Alert.alert(
                  'Invalid Number',
                  'Please enter a valid 10-digit phone number',
                );
              }
            }}
          />
        </Pressable>
      </View>
      {/* Custom Keypad - Always Visible */}
      <PhoneKeypad />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  leftArrowIcon: {
    marginLeft: 30,
    marginTop: 20,
  },
  rightArrowIcon: {
    marginTop: 20,
    position: 'absolute',
    right: 25,
    top: 80,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
  topPartContainer: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  textForPromptNum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  mobileNumber: {
    marginTop: 30,
    color: '#000',
    fontSize: 16,
  },
  inputTextContainer: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 8,
  },
  countryCodeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#000',
  },
  keypadContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  button: {
    position: 'relative',
    top: 60,
    width: 70,
    height: 70,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PhoneNumber;
