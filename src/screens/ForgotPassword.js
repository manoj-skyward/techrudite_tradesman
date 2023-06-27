import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox, TextInput} from 'react-native-paper';
import {BASE_URL} from '../constants';
import axios from 'axios';
// import axios from 'react-native-axios';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const verifyEmail = async () => {
    try {
      console.log('\n\nInside Try  Block\n\n');
      let response = await axios.post(BASE_URL + 'forgot-password', {
        email,
      });
      console.log('\n\n Value issssss\n\n', response.data);
      if (response.data.success) {
        navigation.navigate('VerifyOTP', {
          email,
          fromForgotPass: true,
          fromSignUp: false,
        });
      }
    } catch (err) {
      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
  };

  const handleInputChange = (text, input) => {
    // const handleOnchange = (text, input) => {
    setUserDetails(prevState => ({...prevState, [input]: text}));
    // };
  };
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState('');
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
                source={require('../images/verify_otp_women.png')}
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
                marginBottom: 25,
              }}>
              Forgot Password ?
            </Text>
            <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Enter your registered email id, we will share verification code.
            </Text>

            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="Email"
              keyboardType="email-address"
              value={email}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                height: 50,
                marginVertical: 20,
              }}
              onChangeText={text => setEmail(text)}
            />

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
                onPress={verifyEmail}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Submit</Text>
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
                Remember Password?{'  '}
                {/* <TouchableOpacity style={{justifyContent: 'center'}}> */}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{fontSize: 25, fontWeight: 'bold', color: 'blue'}}>
                  Login
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

export default ForgotPassword;
