import React, {Component} from 'react';
import { ImageBackground, Text, StyleSheet, View, Button  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Login from '../pages/Login';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleText: "ORDER NOW",
            bodyText: "YUKT GROCERY STORE"
            

        };
    }
    static navigationOptions = ({navigation}) => {
      return {
        headerTitle: 'Home          ',
      }
    }
    
    render(){
      const { navigate } = this.props.navigation;
            return (
           <View style={{backgroundColor:'steelblue', height : '100%', width: '100%'}}>
           <View style={{backgroundColor:'white', height : '45%', width: '100%'}}>
           <ImageBackground
            source={require('./yuktlogo.png')}
            style={{width: '100%', height: '75%', backgroundColor: "#fff", marginTop : '16%'}}>
           </ImageBackground> 
           </View>
           <View>
           <Text style={styles.baseText}>
           <Text style={styles.bodyText}>
               {this.state.bodyText}{'\n'}{'\n'}
           </Text>
           </Text>       
          </View>
          <View style={styles.btncontainer}>
            <TouchableHighlight
              onPress={() => navigate('Login')}
              style={styles.touchable}
              >
              <View style={styles.button}>
              <Text style={styles.welcome}>
                CLICK TO ORDER NOW!
                </Text>
                  </View>
                  </TouchableHighlight>
                </View>
         
          <View style={styles.Container}>
          <Text style={styles.FooterText}>
             &copy; YUKT 2019
          </Text>
          </View>
          </View>
           
            );
        
       
    }

    
    
}



const styles = StyleSheet.create({
    bodyText: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'steelblue',
      paddingBottom: 50,
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    baseText: {
        textAlign: 'center',
        color: 'white'
        
    },
    FooterText: {
      backgroundColor : 'steelblue', 
      textAlign : 'center',
      position: 'relative',
      bottom: 0,
      color : 'white'
    },
    Container :
    {
      flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
    },
      btncontainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "steelblue"
      },
      welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#fff" },
      touchable: { borderRadius: 100 },
      button: {
      backgroundColor: "skyblue",
      borderRadius: 80,
      height: 150,
      width: 150,
      justifyContent: "center",

      }
      });

export default Home;