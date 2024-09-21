// components/ProductCard.js
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Card, Text, Image} from 'react-native-elements';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

const ProductCard = ({product = {}, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress}>
    <Card containerStyle={styles.card}>
      <View style={styles.row}>
        <Image
          source={{uri: product.thumbnail}}
          style={styles.image}
          resizeMode="cover"
          loadingIndicatorSource={<ActivityIndicator />}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              ${product.price?.toFixed(2) || '0.00'}
            </Text>
          </View>
          <Text style={styles.description}>
            {product.description.length > 50
              ? `${product.description.substring(0, 50)}...`
              : product.description}
          </Text>
          <View style={styles.ratingContainer}>
            {Array.from({length: 5}, (_, index) => (
              <Text key={index} style={styles.star}>
                {index < Math.round(product.rating) ? '★' : '☆'}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
    width: CARD_WIDTH,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#191970',
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    color: '#FFD700',
    fontSize: 18,
  },
  priceContainer: {
    backgroundColor: '#191970',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
