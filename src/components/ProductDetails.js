import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ProductDetails = ({product}) => (
  <View style={styles.container}>
    <Image source={{uri: product.thumbnail}} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.description}>{product.description}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
    <Text style={styles.detailText}>Category: {product.category}</Text>
    <Text style={styles.detailText}>Brand: {product.brand}</Text>
    <Text style={styles.detailText}>Rating: {product.rating}</Text>
    <Text style={styles.detailText}>Stock: {product.availabilityStatus}</Text>
    <Text style={styles.detailText}>
      Warranty: {product.warrantyInformation}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: width - 40,
    height: 300,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#191970',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  priceContainer: {
    backgroundColor: '#191970',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default ProductDetails;
