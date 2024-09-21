// screens/ProductListScreen.js
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const ProductListScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get('https://dummyjson.com/products');
        setProducts(data.products);
      } catch {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading || error) return <Loading error={error} />;

  const renderProductItem = ({item}) => (
    <ProductCard
      product={item}
      onPress={() =>
        navigation.navigate('ProductDetails', {productId: item.id})
      }
    />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={renderProductItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default ProductListScreen;
