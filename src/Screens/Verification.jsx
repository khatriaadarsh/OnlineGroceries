import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Verification = ({navigation}) => {
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
              <Pressable
                key={key}
                style={styles.button}
                onPress={() => handleKeyPress(key)}>
                <Text style={styles.buttonText}>{key}</Text>
              </Pressable>
            ))}
          </View>
        ))}
        <View>
          <Pressable
            style={[styles.button, {marginHorizontal: 140}]}
            onPress={() => handleKeyPress('backspace')}>
            <Text style={styles.buttonText}>⌫</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View>
      {/* Back Screen Button */}
      <AntDesign
        name="left"
        size={25}
        color="#333"
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />
      {/* Verification Code Input Section */}
      <View style={styles.subContainer}>
        <Text style={styles.title}>Enter your 4-digits code</Text>
        <Text style={styles.subTitle}>Code</Text>
        {/* Verification Code Input */}
        <TextInput
          ref={inputRef}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.codeForNumber}
          placeholder="- - - -"
          keyboardType="number-pad"
          maxLength={4}
          autoFocus={true}
        />
      </View>
      {/* Resend Code and Right Arrow Button Container */}
      <View style={styles.resendAndBtnContainer}>
        {/* Resend Code Text */}
        <Text style={styles.resendTxt}>Resend Code</Text>
        {/* Right Arrow Button */}
        <Pressable
          style={[
            styles.rightArrowIcon,
            {
              opacity:
                phoneNumber.length === 4 && /^\d{4}$/.test(phoneNumber)
                  ? 1
                  : 0.5,
            },
          ]}
          onPress={() => {
            if (phoneNumber.length === 4 && /^\d{4}$/.test(phoneNumber)) {
              // Add your verification logic here
              navigation.navigate('SelectLocation'); // Replace with your next screen
            }
          }}>
          <AntDesign name="right" size={25} color="#ffff" />
        </Pressable>
      </View>
      {/* Custom Keypad */}
      <PhoneKeypad />
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  leftArrowIcon: {
    marginLeft: 10,
    marginTop: 50,
  },
  subContainer: {
    marginLeft: '10%',
    marginTop: '10%',
    gap: 20,
  },

  codeForNumber: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 18,
    width: '85%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    paddingTop: 10,
  },
  resendAndBtnContainer: {
    position: 'relative',
    top: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 20,
  },
  rightArrowIcon: {
    marginTop: 5,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
  resendTxt: {
    fontSize: 17,
    color: 'green',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  keypadContainer: {
    position: 'relative',
    top: '15%',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});
