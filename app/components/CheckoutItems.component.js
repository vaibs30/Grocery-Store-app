import React, { Component } from 'react';

import {
	View,
	Text,
	FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import CartItems  from './CartItems.component';

class CheckoutItems extends Component {  
  constructor(props) {
	  super(props);
	
	}
	onPress = () => {
		this.props.navigation.navigate('Products');
	}
  render() {
    const { cartItems, navigation, cartTotal } = this.props;
    return (
      <View style={styles.container}>
            	
            		<View style={styles.notify}>
            			<Text style={styles.notifyText}>Please confirm your order and proceed to Checkout.</Text>
            		</View>
            		<View style={styles.checkoutitems}>
            		<FlatList 
                  data={cartItems}
            			renderItem={({item, index}) => <CartItems item={item} index={index} />}
            			keyExtractor={(item) => item.id}
            			ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
            		/>
            		<Text style={styles.text}>Total: Rs {(cartTotal).toFixed(2)}</Text>	
            		</View>
                <View style={styles.btnContainer}>
                <TouchableOpacity  style={styles.addBtn}>
                    <Text style={styles.btntext} >      BUY     </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.addBtn} onPress={this.onPress}>
                    <Text style={styles.btntext}>CANCEL</Text>
                </TouchableOpacity>
                </View>
               


       </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  checkoutitems: {
    height: 370
  },
    notify:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red',
      fontSize: 20
    },
    notifyText:{
        textAlign: 'center',
        color: '#fff'  
    },
    addBtn: {
      borderRadius: 50,
      margin: 10,
      alignItems: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'steelblue'
  },
     btntext: {
          color: '#fff',
          fontSize: 18,
          padding: 10
      },
     btnContainer: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems : 'center',
      position: 'relative',
      bottom: 0,
    },
});

export default CheckoutItems;