/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Button,
  CheckBox,
  Icon,
  Input,
} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store'
import { createBottomTabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  image: {
    margin: 10,
    width: 80,
    height: 60,
  },
  formInput: {
    margin: 20,
    width: '80%',
  },
  formCheckbox: {
    margin: 15,
    backgroundColor: null,
  },
  formButton: {
    margin: 10,
  },
});

class LoginTab extends Component {
    
  static navigationOptions = {
    title: 'Login',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="sign-in"
        type="font-awesome"
        size={24}
        iconStyle={{ color: tintColor }}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember: false,
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync('userinfo')
      .then((userdata) => {
        const userinfo = JSON.parse(userdata);
        if (userinfo) {
          this.setState({ username: userinfo.username });
          this.setState({ password: userinfo.password });
          this.setState({ remember: true });
        }
      });
  }

  handleLogin() {
    const { navigation } = this.props;
    const {
      remember,
      password,
      username,
    } = this.state;
    
    console.log(JSON.stringify(this.state));
    if (remember) {
      SecureStore.setItemAsync(
        'userinfo',
        JSON.stringify({
          username,
          password,
        }),
      )
        .catch(error => console.log('Could not save user info', error));
    } else {
      SecureStore.deleteItemAsync('userinfo')
        .catch(error => console.log('Could not delete user info', error));
    }
    navigation.navigate('Products')
  }

  render() {
    const {
      remember,
      password,
      username,
    } = this.state;
    
    const { navigation } = this.props;


    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          leftIcon={{ type: 'font-awesome', name: 'user-o' }}
          onChangeText={username => this.setState({ username })}
          value={username}
          containerStyle={styles.formInput}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'key' }}
          onChangeText={password => this.setState({ password })}
          value={password}
          containerStyle={styles.formInput}
        />
        <CheckBox
          title="Remember Me"
          checked={remember}
          center
          onPress={() => this.setState({ remember: !remember })}
          containerStyle={styles.formCheckbox}
        />
        <View style={styles.formButton}>
          <Button
            onPress={() => this.handleLogin()}
            title="Login"
            icon={(
              <Icon
                name="sign-in"
                type="font-awesome"
                color="white"
              />
            )}
            buttonStyle={{ backgroundColor: 'steelblue' }}
          />
        </View>
        <View style={styles.formButton}>
          <Button
            onPress={() => navigation.navigate('Register')}
            title="Register"
            icon={(
              <Icon
                name="user-plus"
                type="font-awesome"
                color="gray"
              />
            )}
            buttonStyle={{ backgroundColor: 'skyblue' }}
            titleStyle={{ color : 'gray'}}
          />
        </View>
      </View>
    );
  }
}

class RegisterTab extends Component {
  static navigationOptions = {
    title: 'Register',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="user-plus"
        type="font-awesome"
        size={24}
        iconStyle={{ color: tintColor }}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      remember: false,
      username: '',
    };
  }

  handleRegister() {
    const { navigation } = this.props;
    const {
      password,
      remember,
      username,
    } = this.state;
    console.log(JSON.stringify(this.state));

    if (remember) {
      SecureStore.setItemAsync(
        'userinfo',
        JSON.stringify({
          username,
          password,
        }),
      )
        .catch(error => console.log('Could not save user info', error));
    } else {
      SecureStore.deleteItemAsync('userinfo')
        .catch(error => console.log('Could not delete user info', error));
    }
    navigation.navigate('Login')
  }

  render() {
    const {
      mobile,
      email,
      firstname,
      lastname,
      password,
      remember,
      username,
    } = this.state;

    const { navigation } = this.props;
    return (
        
        <View style={styles.container}>

          <Input
            placeholder="Username"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={username => this.setState({ username })}
            value={username}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={password => this.setState({ password })}
            value={password}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="First Name"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={firstname => this.setState({ firstname })}
            value={firstname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Last Name"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={lastname => this.setState({ lastname })}
            value={lastname}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
            onChangeText={email => this.setState({ email })}
            value={email}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Mobile Number"
            leftIcon={{ type: 'font-awesome', name: 'phone' }}
            onChangeText={mobile => this.setState({ mobile })}
            value={mobile}
            containerStyle={styles.formInput}
          />
          <CheckBox
            title="Remember Me"
            checked={remember}
            center
            onPress={() => this.setState({ remember: !remember })}
            containerStyle={styles.formCheckbox}
          />
          <View style={styles.formButton}>
            <Button
              onPress={() => this.handleRegister()}
              title="Register"
              icon={(
                <Icon
                  name="user-plus"
                  type="font-awesome"
                  color="white"
                />
              )}
              buttonStyle={{ backgroundColor: 'steelblue' }}
            />
          </View>
        </View>
    );
  }
}


    const Login = createBottomTabNavigator(
        {
          Login: LoginTab,
          Register: RegisterTab,
        },
        {
          tabBarOptions: {
            activeBackgroundColor: 'steelblue',
            inactiveBackgroundColor: 'skyblue',
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
          },
        },
      );
      




export default Login;