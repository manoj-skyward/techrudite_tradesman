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
import OtpInputs from 'react-native-otp-inputs';
// import axios from 'react-native-axios';

const LoginOtpVerified = ({route, navigation}) => {
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
                source={require('../images/otp_verified_man.png')}
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
                marginTop: 40,
                marginBottom: 25,
              }}>
              OTP is verified...
            </Text>
            <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Happy to say everything went smoothly. Start with Tradesman for
              great experience...
            </Text>

            <Text
              onPress={() =>
                navigation.navigate('Dashboard', {email: route.params.email})
              }
              style={{
                color: 'blue',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 20,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Continue to App
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginOtpVerified;
