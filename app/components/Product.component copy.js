import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import { ListItem, Left, Body, Right, List, Thumbnail, Button, Toast } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      showToast: false,
      loading: true
	  };
}

async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('node_modules\native-base\Fonts\Roboto.ttf'),
    'Roboto_medium': require('node_modules\native-base\Fonts\Roboto_medium.ttf'),
    ...Ionicons.font,
  })
  this.setState({ loading: false })
}

    addToCart = () => {
        this.props.addItemsToCart(this.props.item);
        Toast.show({
          text: 'Item has been added!',
          buttonText: 'Okay'
        })
    }
    render() {
        const { product } = this.props;
        if (this.state.loading) {
          return (
            <View></View>
          );
        }
            return (
    
            <List>
            <ListItem avatar key={product.id}>
              <Left>
                <Thumbnail source={product.picture} />
              </Left>
              <Body style={styles.body}>
                <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{product.title}</Text>
                <Text note style={{ fontSize: 15}}>Price is : Rs {product.cost}</Text>
              </Body>
              <Right style={styles.btnContainer}>
              <View>
              <NumericInput 
            value={this.state.value} 
            onChange={value => this.setState({value})} 
            totalWidth={180} 
            totalHeight={40} 
            iconSize={20}
            step={1}
            valueType='real'
            rounded 
            minValue={0}
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            
            <View>
            <Icon
        name="shopping-cart"
        type="font-awesome"
        size={35}
        iconStyle={{ color: '#EA3788' }}
        onPress={this.addToCart}
        
            />
           
            </View>

            </View>
              
              </Right>
            </ListItem>
            
          </List>
           
       
    );
    }
}

const styles = StyleSheet.create({

   addBtn: {
    borderRadius: 50,
    margin: 10,
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue'
},
    text: {
        color: '#fff',
        fontSize: 18,
        padding: 10
    },
   btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  body : {
    flex : 1,
    flexDirection : 'column',
  }
});

export default Product;
