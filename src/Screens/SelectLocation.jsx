import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import SelectDropdown from 'react-native-select-dropdown';
// const ZoneData = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'];
// const AreaData = ['Area A', 'Area B', 'Area C', 'Area D'];
const SelectLocation = ({navigation}) => {
  // const [selectedZone, setSelectedZone] = useState(null);
  // const [selectedArea, setSelectedArea] = useState(null);

  // const handleZoneSelect = (selectedItem) => {
  //   setSelectedZone(selectedItem);
  // };
  // const handleAreaSelect = (selectedItem) => {
  //   setSelectedArea(selectedItem);
  // };
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
      {/* <View style={styles.zoneAndAreaInput}>
        <Text style={{color: 'gray'}}>Your Zone</Text>
        <SelectDropdown
          data={ZoneData}
          defaultButtonText="Select Country"
          onSelect={handleZoneSelect}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.dropdownText}
        />
        <Text style={{color: 'gray', marginTop: 20}}>Your Area</Text>
        <SelectDropdown
          data={AreaData}
          defaultButtonText="Select Zone"
          onSelect={handleAreaSelect}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.dropdownText}
        />
      </View> */}
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
  zoneAndAreaInput: {
    position: 'relative',
    top: '30%',
    left: '10%',
  },
});
