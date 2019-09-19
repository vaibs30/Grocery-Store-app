import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';


export class Cart extends Component {
	constructor(props) {
	  super(props);
	
	}
	onPress = () => {
		this.props.navigation.navigate('Cart');
	}
    render() {
    	const { cartItems } = this.props;
        return (
       
            	<TouchableOpacity onPress={this.onPress} style={styles.container}>
            		<Text style={styles.cart}>Your Cart: {(cartItems).length} items</Text>
            	</TouchableOpacity>
           
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart
});

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cart:{
		color: 'white',
		fontSize: 16
	}
})

export default connect(
    mapStateToProps
)(Cart);
