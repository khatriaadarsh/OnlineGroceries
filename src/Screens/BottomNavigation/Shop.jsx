import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImageSlider} from 'react-native-image-slider-banner';

const products = [
  {
    id: 1,
    name: 'Organic Bananas',
    weight: '7pcs, Priceg',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 2,
    name: 'Red Apple',
    weight: '1kg, Priceg',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 3,
    name: 'Bell Pepper Red',
    weight: '1kg, Priceg',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 4,
    name: 'Ginger',
    weight: '250g, Priceg',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];

const Shop = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="carrot"
        size={55}
        color="orange"
        style={styles.vectorIcons}
      />
      <View style={styles.locationTitleContainer}>
        <MaterialCommunityIcons name="map-marker" size={28} color="gray" />
        <Text style={styles.titleLocation}>Clifton, Karachi</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <MaterialCommunityIcons name="magnify" size={28} color="black" />
        <Text style={styles.searchBarTitle}>Search Store</Text>
      </View>

      <View style={styles.bannerContainer}>
        <ImageSlider
          data={[
            {
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
            },
            {
              img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            },
            {
              img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
            },
          ]}
          autoPlay={true}
          closeIconColor="#fff"
          onItemChanged={item => console.log('item', item)}
        />
      </View>

      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>
          Exclusive Offer
        </Text>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                width: 150,
                margin: 10,
                padding: 15,
                borderRadius: 15,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 120, height: 120, borderRadius: 10}}
              />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                {item.name}
              </Text>
              <Text style={{color: 'gray'}}>{item.weight}</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
                ${item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  vectorIcons: {
    paddingTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
    textAlign: 'center',
    transform: [{rotate: '45deg'}],
  },
  locationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: '5%',
  },
  titleLocation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  searchInputContainer: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderRadius: 20,
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 15,
    paddingLeft: '5%',
  },
  searchBarTitle: {
    fontSize: 16,
    color: 'gray',
    marginLeft: '3%',
  },
  bannerContainer: {
    marginHorizontal: '5%',
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',
    height: '20%',
  },
});
