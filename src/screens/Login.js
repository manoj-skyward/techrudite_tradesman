import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox, TextInput} from 'react-native-paper';
import {BASE_URL} from '../constants';
import axios from 'axios';
// import axios from 'react-native-axios';

const Login = () => {
  const navigation = useNavigation();

  const userLogin = async () => {
    const {email, password} = userDetails;
    const body = {
      email,
      password,
    };
    // <ActivityIndicator size="large" animating={true} />;
    // console.log('\n\n URL issss\n\n', BASE_URL + 'register');

    // const URL = BASE_URL + 'register';
    // console.log('\n\n URL issss\n\n', BASE_URL + 'register');
    try {
      console.log('\n\nInside Try  Block\n\n');
      let response = await axios.post(BASE_URL + 'login', {
        email,
        password,
      });
      console.log('\n\n Value issssss\n\n', response.data);
      if (response.data.success) {
        console.log('\n\nEntered Successsssssss\n\n');
        navigation.navigate('Dashboard', {email});
      }
    } catch (err) {
      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
    //   </ActivityIndicator>

    // <ActivityIndicator size="large" animating={false} />;
  };

  const handleInputChange = (text, input) => {
    // const handleOnchange = (text, input) => {
    setUserDetails(prevState => ({...prevState, [input]: text}));
    // };
  };

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  return (
    <ScrollView
      style={{backgroundColor: 'yellow', flex: 1}}
      showsVerticalScrollIndicator={false}
      // automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Text style={{fontSize: 18, color: 'red', fontWeight: '700'}}></Text> */}
        <View style={{height: '30%', backgroundColor: 'red'}}>
          <ImageBackground
            source={require('../images/signup.png')}
            style={{size: 'cover', height: '100%', width: '100%'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                //   backgroundColor: 'red',
              }}>
              <Image
                source={require('../images/signup_man.png')}
                style={{size: 'cover', height: '80%', width: '50%'}}
              />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            height: '70%',
            // backgroundColor: 'pink',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '85%'}}>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                marginTop: 15,
                marginVertical: 5,
              }}>
              Login
            </Text>

            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="Email"
              keyboardType="email-address"
              value={userDetails.email}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                height: 50,
                marginVertical: 10,
              }}
              onChangeText={text => handleInputChange(text, 'email')}
            />
            <TextInput
              textColor="black"
              secureTextEntry={true}
              underlineColor="black"
              activeUnderlineColor="black"
              label="Password"
              // keyboardType="invisible-passwor"
              value={userDetails.password}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                marginVertical: 10,
                height: 50,
              }}
              onChangeText={text => handleInputChange(text, 'password')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
                marginBottom: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'blue',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                }}>
                Forgot password?
              </Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={{
                  height: 50,
                  marginTop: 10,
                  backgroundColor: '#314fa4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                  marginVertical: 20,
                }}
                onPress={userLogin}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: '85%',
              justifyContent: 'flex-end',
              //   backgroundColor: 'yellow',
              //   alignItems: 'flex-end',
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  marginTop: 5,
                  marginBottom: 30,
                  fontSize: 20,
                }}>
                Dont have an account?{'  '}
                {/* <TouchableOpacity style={{justifyContent: 'center'}}> */}
                <Text
                  onPress={() => navigation.navigate('SignUp')}
                  style={{fontSize: 25, fontWeight: 'bold', color: 'blue'}}>
                  Signup
                </Text>
                {/* </TouchableOpacity> */}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
