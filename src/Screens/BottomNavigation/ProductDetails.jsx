import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetails = ({route, navigation}) => {
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="share-variant" size={24} />
        </TouchableOpacity>
      </View>
      {/* Product Image */}
      <Image source={{uri: product.image}} style={styles.productImage} />
      {/* Product Info */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              size={28}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.productWeight}>{product.weight}</Text>
        {/* Quantity and Price */}
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(q => q + 1)}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.priceText}>
            ${(product.price * quantity).toFixed(2)}
          </Text>
        </View>
        {/* Product Detail */}
        <TouchableOpacity style={styles.detailRow}>
          <Text style={styles.detailTitle}>Product Detail</Text>
          <MaterialCommunityIcons name="chevron-down" size={22} />
        </TouchableOpacity>
        <Text style={styles.detailText}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May
          Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
        </Text>
        {/* Nutritions */}
        <TouchableOpacity style={styles.nutritionRow}>
          <Text style={styles.nutritionTitle}>Nutritions</Text>
          <View style={styles.nutritionBadge}>
            <Text style={styles.nutritionBadgeText}>100gr</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} />
        </TouchableOpacity>
        {/* Review */}
        <View style={styles.reviewRow}>
          <Text style={styles.nutritionTitle}>Review</Text>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            {[...Array(5)].map((_, i) => (
              <MaterialCommunityIcons
                key={i}
                name="star"
                size={20}
                color="#FFA41B"
              />
            ))}
          </View>
        </View>
      </View>
      {/* Add to Basket */}
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add To Basket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: "95%",
    resizeMode: 'contain',
    backgroundColor: '#F7F8FA',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: -20,
    marginBottom: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
  },
  productWeight: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 16,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  qtyBtnText: {
    fontSize: 20,
    color: '#222',
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 24,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: '#222',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  detailText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 12,
  },
  nutritionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nutritionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nutritionBadge: {
    backgroundColor: '#F2F3F2',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 10,
    marginRight: 6,
  },
  nutritionBadgeText: {
    fontSize: 13,
    color: '#888',
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  addBtn: {
    backgroundColor: '#53B175',
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 18,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
