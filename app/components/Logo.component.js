import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity
} from 'react-native';


const logoImage = require('../assets/images/logo.png');

class Logo extends Component {

  goHome = () => {
      this.props.navigation.navigate('Products');
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goHome}>
          <Image source={logoImage} style={{width:32, height:32, margin: 10}} />
      </TouchableOpacity>
    );
  }
}


export default Logo;