import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Verification = ({navigation}) => {
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
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
  leftArrowIcon: {
    marginLeft: 30,
    marginTop: 60,
  },
});
