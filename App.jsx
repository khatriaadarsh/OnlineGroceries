import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.card}>
        <Image
          style={{width: 40, height: 40, borderRadius: 40}}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}></Image>
        <Text>Name</Text>
        <Text>Email</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
