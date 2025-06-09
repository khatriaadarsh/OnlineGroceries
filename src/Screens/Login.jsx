import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        size={85}
        color="orange"
        style={styles.vectorIcons}
      />
      <View style={styles.textContainr}>
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subTitle}>Enter your emails and password</Text>

        <View style={styles.inputFieldsContainer}>
          <Text style={styles.emailTitle}>Email</Text>
          <TextInput
            textContentType="emailAddress"
            style={styles.inputFeild}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoFocus={true}
            onChangeText={setEmail}
          />
          <Text style={styles.passwordTitle}>Password</Text>
          <TextInput
            textContentType="password"
            secureTextEntry={true}
            style={styles.inputFeild}
            placeholder="Enter your password"
            onChangeText={setPassword}
          />
        </View>
        <Text style={styles.forgetPassTxt}>Forget Password?</Text>
      </View>

      <Pressable
        style={styles.loginBtn}
        onPress={() => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
          } else if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email');
          } else if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters');
          } else {
            navigation.navigate('HomeScreen'); // Replace with your next screen
            Alert.alert('Success', 'Logged in successfully');
          }
        }}>
        <Text style={styles.btnText}>Log In</Text>
      </Pressable>

      <Text style={styles.dontHaveAccountTxt}>Don't have an account?</Text>
      {/* SignUp Button */}
      <Pressable
        style={styles.signupBtn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default Login;

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
  textContainr: {
    paddingTop: '10%',
    paddingLeft: '8%',
    gap: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  inputFieldsContainer: {
    marginTop: '10%',
    paddingRight: '10%',
  },
  emailTitle: {
    fontSize: 16,
    color: '#333',
  },
  inputFeild: {
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    fontSize: 16,
    color: '#333',
  },
  passwordTitle: {
    fontSize: 16,
    color: '#333',
    marginTop: '10%',
    marginBottom: '2%',
  },
  forgetPassTxt: {
    fontSize: 16,
    marginTop: '4%',
    paddingRight: '10%',
    textAlign: 'right',
  },
  loginBtn: {
    backgroundColor: '#53B186',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    borderRadius: 18,
    marginTop: '5%',
    alignItems: 'center',
    marginHorizontal: '8%',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  dontHaveAccountTxt: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: '5%',
    paddingRight: '10%',
  },
  signupBtn: {
    position: 'relative',
    bottom: 22,
    paddingLeft: 3,
    left: '65%',
  },
  signupText: {
    fontSize: 16,
    color: '#53B186',
    fontWeight: 'bold',
  },
});
