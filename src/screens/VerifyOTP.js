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

const VerifyOTP = ({route}) => {
  const navigation = useNavigation();
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(30);
  const [otp, setOTP] = useState(0);

  //   console.log('\n\n Route Params\n\n', route.params.email);

  const [name, domain] = route.params.email.split('@');
  const userEmail = `${name[0]}${new Array(name.length).join('*')}@${domain}`;
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const verifyOTPCode = async () => {
    const MAIN_URL = route.params.fromSignUp
      ? BASE_URL + 'verify-email'
      : BASE_URL + 'verify-password-token';
    console.log('\n\n OTP is \n\n', otp);
    try {
      console.log('\n\nInside Try  Block\n\n');
      let response = await axios.post(MAIN_URL, {
        code: Number(otp),
        email: route?.params?.email,
      });
      console.log('\n\n Value issssss\n\n', response.data);
      if (response.data.success) {
        console.log('\n\n Inside Navigation func\n\n');
        if (route.params.fromSignUp) {
          navigation.navigate('LoginOtpVerified', {
            email: route?.params?.email,
          });
        } else if (route.params.fromForgotPass) {
          navigation.navigate('ResetPassword', {
            email: route?.params?.email,
            otp: otp,
          });
        }
      }
    } catch (err) {
      navigation.navigate('ResetPassword', {
        email: route?.params?.email,
        otp: otp,
      });

      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
  };

  const resendOTP = async () => {
    try {
      console.log('\n\nInside Try  Block\n\n');
      let response = await axios.post(BASE_URL + 'resend-email-code', {
        email: route?.params?.email,
      });
      console.log('\n\n Value issssss\n\n', response.data);
    } catch (err) {
      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
  };

  const handleOTPChange = otp => {
    console.log('\n\n Handleeeeeeddddd \n\n', otp);
  };

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
              Verify Code
            </Text>

            <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Check your Email inbox we have sent you the code at{' '}
              {userEmail || 'abc@gmail.com'}
            </Text>

            {/* <OtpInputs
              handleChange={code => console.log(code)}
              numberOfInputs={6}
            /> */}

            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="OTP"
              keyboardType="number"
              value={otp}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                height: 50,
                marginVertical: 10,
              }}
              onChangeText={text => setOTP(text)}
            />

            <Text style={{color: 'black', marginBottom: 20}}>
              ({minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds})
            </Text>
            <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Did not received the code?
            </Text>
            <Text
              onPress={resendOTP}
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'blue',
                textDecorationLine: 'underline',
              }}>
              Resend Code
            </Text>

            <View>
              <TouchableOpacity
                style={{
                  height: 50,
                  marginTop: 10,
                  backgroundColor: '#314fa4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                  marginTop: 40,
                }}
                onPress={verifyOTPCode}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyOTP;
