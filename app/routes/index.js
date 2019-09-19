import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';

import themes from '../styles/theme.style';

const Route = createStackNavigator(
{
  Products: { screen: Products},
  Cart: { screen: Checkout},
},
{
 navigationOptions: {
 	headerStyle: {
 		backgroundColor: themes.BACKGROUND_COLOR,
 		
 	},
 	headerTintColor: '#fff'
 }
}
);

export default Route;