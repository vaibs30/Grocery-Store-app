import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { ListItem, Left, Body, Right, List, Thumbnail, Icon,Button } from 'native-base';

import themes from '../styles/theme.style';

class Product extends Component {
    addToCart = () => {
        this.props.addItemsToCart(this.props.item)
    }
    render() {
        const { product } = this.props;
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
              <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
           
       
    );
    }
}

const styles = StyleSheet.create({

   addBtn: {
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    alignItems: 'flex-end',
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
