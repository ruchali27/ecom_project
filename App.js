import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const screenOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: '#191970',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          options={screenOptions('Product List')}
          component={ProductListScreen}
        />
        <Stack.Screen
          name="ProductDetails"
          options={screenOptions('Product Details')}
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
