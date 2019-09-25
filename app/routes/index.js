import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet,
	TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
const logoImage = require('../assets/images/drawericon.png');
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Root } from "native-base";


const CartNavigator = createStackNavigator({
	Cart: { screen: Checkout },
	navigationOptions: ({ navigation }) => ({
	 headerLeft: <Icon name="cart" size={24} 
	 color= 'white'
	 onPress={ () => navigation.toggleDrawer() } />
   
	})
   
   }, {
	 navigationOptions: ({ navigation }) => ({
	   headerStyle: {
		 backgroundColor : 'steelblue'
	   },
	   headerTitleStyle : {
		 color: "#fff"        
	   },
	   headerTintColor: "#fff",
	   headerLeft: <Icon name="menu" size={24} 
	   color= 'white'
	   onPress={ () => navigation.toggleDrawer() } /> 
	   })
	   
	 });
	 const LoginNavigator = createStackNavigator({
		Login: { screen: Login },
		navigationOptions: ({ navigation }) => ({
		headerLeft: null,
		headerMode: 'none'
	   
		})
	   
	   }, {
		 navigationOptions: ({ navigation }) => ({
		   headerStyle: {
			 backgroundColor : 'steelblue'
		   },
		   headerTitleStyle : {
			 color: "#fff"        
		   },
		   headerTintColor: "#fff",
		   headerMode: 'none'
		   })
		   
		 }); 

	 const ProductNavigator = createStackNavigator({
		Products: { screen: Products },
		navigationOptions: ({ navigation }) => ({
		  headerLeft: <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
          <Image source={logoImage} style={{width:30, height:28, margin: 10}} />
      </TouchableOpacity>
	  
		})
	  
		}, {
		navigationOptions: ({ navigation }) => ({
		headerStyle: {
			backgroundColor: "steelblue"
		},
		headerTitleStyle: {
			color: "#fff"    
		},
		headerTintColor: "#fff",
		headerLeft: <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
		<Image source={logoImage} style={{width:30, height:28, margin: 10}} />
     	</TouchableOpacity> 
		})
		});

		const HomeNavigator = createStackNavigator({
			Home: { screen: Home },
			navigationOptions: ({ navigation }) => ({
			//  headerLeft :<TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
			//  <Image source={logoImage} style={{width:30, height:28, margin:10}} />
		    //  </TouchableOpacity>
			
			})
			}, {
			navigationOptions: ({ navigation }) => ({
			headerStyle: {
			  backgroundColor: "steelblue",
			},
			headerTitleStyle: {
				color: "#fff"  , 
				textAlign: 'center',
				alignSelf:'center',
				
					   
			},
			headerTintColor: "#fff",
			//headerLeft: <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
			//<Image source={logoImage} style={{width:30, height:28, margin: 10}} />
		    //</TouchableOpacity>
			})
			});		

/*const Route = createStackNavigator(
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
); */

const CustomDrawerContentComponent = (props) => (
	<ScrollView>
	  <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
		<View style={styles.drawerHeader}>
		  <View style={{flex:1}}>
		  <Image source={require('./yuktlogo.png')} style={styles.drawerImage} />
		  </View>
		  <View style={{flex: 2}}>
			<Text style={styles.drawerHeaderText}>YUKT GROCERY STORE</Text>
		  </View>
		</View>
		<DrawerItems {...props} />
	  </SafeAreaView>
	</ScrollView>
  );
  const MainNavigator = createDrawerNavigator({
	Home: 
	{ screen: HomeNavigator,
	  navigationOptions: {
		title: 'Home  ',
		drawerLabel: 'Home  ',
		drawerLockMode: 'locked-closed',
		drawerIcon: ({ tintColor, focused }) => (
		  <Icon
			name='home'
			type='font-awesome'            
			size={24}
			color={tintColor}

		  />
		),
	  }
	},
	Login: 
	{ screen: LoginNavigator,
	   navigationOptions: {
		title: '',
		drawerLabel: () => null,
		drawerLockMode: 'locked-closed',

	  } 
	  
	},
	
	Products: 
	{ screen: ProductNavigator,
	  navigationOptions: {
		title: 'Products  ',
		drawerLabel: 'Products ',
		drawerIcon: ({ tintColor, focused }) => (
		  <Icon
			name='plus-square'
			type='font-awesome'            
			size={24}
			color={tintColor}
		  />
		),
	  } 
	},
	Cart: 
	{ screen: CartNavigator,
	  navigationOptions: {
		title: 'Cart  ',
		drawerLabel: 'Cart  ',
		drawerIcon: ({ tintColor, focused }) => (
		  <Icon
			name='shopping-cart'
			type='font-awesome'            
			size={24}
			color={tintColor}
		  />
		),
	  } 
	}
   },
	{
		drawerBackgroundColor: 'skyblue',
		contentComponent: CustomDrawerContentComponent
		});

		const styles = StyleSheet.create({
			container: {
			  flex: 1,
			},
			drawerHeader: {
			  backgroundColor: 'steelblue',
			  height: 120,
			  alignItems: 'center',
			  justifyContent: 'center',
			  flex: 1,
			  flexDirection: 'row'
			},
			drawerHeaderText: {
			  color: 'white',
			  fontSize: 22,
			  fontWeight: 'bold'
			},
			drawerImage: {
			  margin: 5,
			  width: 80,
			  height: 60
			}
		  });
		  
		  class Route extends Component {

			render() {
			
			return (
				<Root>
				<View style={{flex:10, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
				   <MainNavigator />
			  </View>
				</Root>
			  
			);
			}
			}		  

export default Route;