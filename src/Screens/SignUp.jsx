import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailFormatCorrect, setIsEmailFormatCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      <View style={styles.titleAndTextInputContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Enter your credentials to continue</Text>
        <View style={styles.inputFieldsContainer}>
          <Text style={styles.inputTextTitle}>Username</Text>
          <TextInput
            textContentType="username"
            autoCapitalize="none"
            onChangeText={setUsername}
            value={username}
            style={styles.inputFeild}
            placeholder="Enter your username"
            keyboardType="username"
            autoFocus={true}
          />
        </View>
        <Text style={styles.inputTextTitle}>Email</Text>
        <View style={styles.emailInputTxtContainer}>
          <TextInput
            textContentType="emailAddress"
            autoCapitalize="none"
            style={styles.inputFeild}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoFocus={true}
            onChangeText={text => {
              setEmail(text);
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsEmailFormatCorrect(emailRegex.test(text));
            }}
          />
          <Text style={styles.emailRightOrWrongIcon}>
            {isEmailFormatCorrect ? '✅' : '❌'}
          </Text>
        </View>

        <Text style={styles.inputTextTitle}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            textContentType="password"
            secureTextEntry={!showPassword}
            style={[styles.inputFeild, {flex: 1}]}
            placeholder="Enter your password"
            keyboardType="default"
            onChangeText={setPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
        <Text style={styles.termsAndPrivacyText}>
          By continuing you agree to our Terms of Services and Privacy
        </Text>
      </View>
      <Pressable
        style={[styles.signUpBtn, {}]}
        onPress={() => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!username || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
          } else if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email');
          } else if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters');
          } else {
            navigation.navigate('HomeScreen');
            Alert.alert('Success', 'Logged in successfully');
          }
        }}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.alreadyHaveAccount}>Already have an account?</Text>
      <Text
        style={styles.continueWithLogin}
        onPress={() => navigation.navigate('Login')}>
        Log In
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  leftArrowIcon: {
    marginLeft: '5%',
    marginTop: '12%',
  },
  vectorIcons: {
    paddingTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
    textAlign: 'center',
    transform: [{rotate: '45deg'}],
  },
  titleAndTextInputContainer: {
    paddingTop: '15%',
    paddingLeft: '8%',
    marginRight: '10%',
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
  inputTextTitle: {
    fontSize: 16,
    color: 'gray',
    paddingTop: '8%',
    fontWeight: 'bold',
  },
  inputFeild: {
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
  },
  signUpBtn: {
    backgroundColor: '#53B186',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    borderRadius: 18,
    marginTop: '5%',
    alignItems: 'center',
    marginHorizontal: '7%',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsAndPrivacyText: {
    fontSize: 14,
    color: 'gray',
    letterSpacing: 0.5,
    marginTop: '3%',
  },
  alreadyHaveAccount: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: '5%',
  },
  continueWithLogin: {
    color: '#53B186',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'relative',
    left: '72.5%',
    bottom: '2.4%',
  },
  emailRightOrWrongIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
