import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImageSlider} from 'react-native-image-slider-banner';

const exclusiveOfferProducts = [
  {
    id: 1,
    name: 'Organic Bananas',
    weight: '7pcs, Priceg',
    price: 4.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 2,
    name: 'Red Apple',
    weight: '1kg, Priceg',
    price: 4.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 3,
    name: 'Bell Pepper Red',
    weight: '1kg, Priceg',
    price: 4.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 4,
    name: 'Ginger',
    weight: '250g, Priceg',
    price: 4.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];
const bestSellingProducts = [
  {
    id: 101,
    name: 'Fresh Avocados',
    weight: '4pcs, Price per unit',
    price: 6.49,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/2227843/pexels-photo-2227843.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 102,
    name: 'Organic Strawberries',
    weight: '500g, Price per pack',
    price: 5.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/599795/pexels-photo-599795.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 103,
    name: 'Baby Spinach',
    weight: '200g, Price per bag',
    price: 3.29,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/2325842/pexels-photo-2325842.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 104,
    name: 'Sweet Potatoes',
    weight: '1kg, Price per kg',
    price: 2.99,
    addToCart: '+',
    image:
      'https://images.pexels.com/photos/1435733/pexels-photo-1435733.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];
const Shop = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
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
      {/* Exclusive Offer Cards  */}
      <View>
        <View style={styles.cardHeadingAndSeeAllTxt}>
          <Text style={styles.cardHeading}>Exclusive Offer</Text>
          <Text style={styles.seeAllTxt}>See all</Text>
        </View>
        <FlatList
          data={exclusiveOfferProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.exclusiveOfferItem}
              key={item.id}
              onPress={() =>
                navigation.navigate('ProductDetails', {product: item})
              }>
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
              <Text style={styles.addToCartIcons}>{item.addToCart}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Best Selling Products List */}
      <View>
        <View style={styles.cardHeadingAndSeeAllTxt}>
          <Text style={styles.cardHeading}>Best Selling Products</Text>
          <Text style={styles.seeAllTxt}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {bestSellingProducts.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.exclusiveOfferItem}
              onPress={() =>
                navigation.navigate('ProductDetails', {product: item})
              }>
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
              <Text style={styles.addToCartIcons}>{item.addToCart}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Select Groceries */}

      {/* Groceries Card Section */}
      <View>
        <View style={styles.cardHeadingAndSeeAllTxt}>
          <Text style={styles.cardHeading}>Groceries</Text>
          <Text style={styles.seeAllTxt}>See all</Text>
        </View>
        {/* Category Tabs */}
        <View style={styles.groceryTabsContainer}>
          <View style={[styles.groceryTab, {backgroundColor: '#FFF4E0'}]}>
            <Text style={styles.groceryTabTextActive}>Pulses</Text>
          </View>
          <View style={[styles.groceryTab, {backgroundColor: '#E8F6EF'}]}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
              }}
              style={styles.groceryTabIcon}
            />
            <Text style={styles.groceryTabText}>Rice</Text>
          </View>
          {/* Add more tabs as needed */}
        </View>
        {/* Product Cards */}
        <View style={styles.groceryCardsRow}>
          <View style={styles.groceryCard}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/raw-beef-bone-with-herbs-isolated-white-background_123827-20784.jpg',
              }}
              style={styles.groceryCardImage}
            />
            <Text style={styles.groceryCardTitle}>Beef Bone</Text>
            <Text style={styles.groceryCardWeight}>1kg, Priceg</Text>
            <View style={styles.groceryCardFooter}>
              <Text style={styles.groceryCardPrice}>$4.99</Text>
              <View style={styles.groceryAddBtn}>
                <Text style={styles.groceryAddBtnText}>+</Text>
              </View>
            </View>
          </View>
          <View style={styles.groceryCard}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/raw-whole-chicken-isolated-white-background_123827-20780.jpg',
              }}
              style={styles.groceryCardImage}
            />
            <Text style={styles.groceryCardTitle}>Broiler Chicken</Text>
            <Text style={styles.groceryCardWeight}>1kg, Priceg</Text>
            <View style={styles.groceryCardFooter}>
              <Text style={styles.groceryCardPrice}>$4.99</Text>
              <View style={styles.groceryAddBtn}>
                <Text style={styles.groceryAddBtnText}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  exclusiveOfferItem: {
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
  },
  addToCartIcons: {
    color: 'white',
    position: 'absolute',
    bottom: 15,
    right: 10,
    backgroundColor: 'green',
    padding: '8%',
    borderRadius: 10,
  },
  cardHeadingAndSeeAllTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllTxt: {
    paddingTop: 8,
    color: 'green',
    textDecorationLine: 'underline',
  },
  groceryTabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  groceryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginRight: 10,
  },
  groceryTabIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  groceryTabText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  groceryTabTextActive: {
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
  },
  groceryCardsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  groceryCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    minWidth: 160,
    maxWidth: 180,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  groceryCardImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  groceryCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#222',
  },
  groceryCardWeight: {
    color: 'gray',
    fontSize: 13,
    marginBottom: 8,
  },
  groceryCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  groceryCardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  groceryAddBtn: {
    backgroundColor: '#53B175',
    borderRadius: 100,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groceryAddBtnText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
