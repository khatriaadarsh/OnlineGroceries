import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SelectLocation = ({navigation}) => {
  return (
    <View>
      <AntDesign
        name="left"
        size={28}
        color="#333"
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.imageAndTextContainer}>
        <Image
          source={require('../Images/maplogoimage.png')}
          style={styles.maplogoimage}
        />
        <Text style={styles.title01}>Select your Location</Text>
        <Text style={styles.title02}>
          Swithch on your location to stay in tune with what’s happening in your
          area
        </Text>
      </View>
      
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  leftArrowIcon: {
    marginLeft: 30,
    marginTop: 60,
    position: 'absolute',
  },
  imageAndTextContainer: {
    marginTop: '25%',
    gap: 10,
  },
  maplogoimage: {
    alignSelf: 'center',
    width: '90%',
  },
  title01: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  title02: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 55,
    lineHeight: 20,
  },
});
