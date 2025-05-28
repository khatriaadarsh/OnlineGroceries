import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';

const Zone = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Area = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const SelectLocation = ({navigation}) => {
  const [zoneValue, setZoneValue] = useState(null);
  const [areaValue, setAreaValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <AntDesign
        name="left"
        size={28}
        color="#333"
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />
      {/* Image and Text Section */}
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
      {/* Dropdowns for Zone and Area */}
      <View style={styles.zoneAndAreaDropdownContainer}>
        {/* Zone Dropdown */}
        <View style={styles.zoneDropdownContainer}>
          <Text style={styles.zoneTxt}>Your Zone</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Zone}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Zone' : '...'}
            searchPlaceholder="Search..."
            value={zoneValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setZoneValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        {/* Area Dropdown */}
        <View style={styles.areaDropdownContainer}>
          <Text style={styles.zoneTxt}>Your Area</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Area}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Area' : '...'}
            searchPlaceholder="Search..."
            value={areaValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setAreaValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
      </View>
      {/* Submit Button */}
      <Pressable
        style={styles.submitButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    flex: 1,
    gap: 40,
    paddingHorizontal: 20,
  },
  leftArrowIcon: {
    marginLeft: 10,
    marginTop: 50,
    position: 'absolute',
  },
  imageAndTextContainer: {
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
    lineHeight: 20,
    marginHorizontal: 35,
  },
  zoneAndAreaDropdownContainer: {
    position: 'relative',
    top: '15%',
    padding: 16,
    gap: 25,
  },
  dropdown: {
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  zoneTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 18,
    paddingVertical: 18,
    marginTop: '40%',
  },
  btnText: {
    color: '#ffff',
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

// label: {
//   position: 'absolute',
//   backgroundColor: 'white',
//   left: 22,
//   top: 8,
//   zIndex: 999,
//   paddingHorizontal: 8,
//   fontSize: 14,
// },
