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

const ResetPassword = ({route, navigation}) => {
  const [newPass, setNewPass] = useState('');
  const [repeatNewPass, setRepeatNewPass] = useState('');
  const [areSame, setAreSame] = useState(true);

  const resetPassword = async () => {
    try {
      let response = await axios.post(BASE_URL + 'reset-password', {
        code: route?.params?.otp,
        email: route?.params?.email,
        password: repeatNewPass,
      });
      console.log('\n\n Value issssss\n\n', response.data);
      if (response.data.success) {
        navigation.navigate('PassSuccessful');
      }
    } catch (err) {
      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
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
              Reset Password ?
            </Text>
            <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Your new password must be different from previous used password,
              contain atleast 8 letters.
            </Text>

            {/* <Text
              style={{
                color: 'black',
                // alignSelf: 'center',
                marginTop: 5,
                marginBottom: 10,
                fontSize: 17,
              }}>
              Check your Email inbox we have sent you the code at{' '}
              {userEmail || 'abc@gmail.com'}
            </Text> */}

            {/* <OtpInputs
                //   handleChange={code => console.log(code)}
                numberOfInputs={6}
              /> */}

            <TextInput
              textColor="black"
              secureTextEntry={true}
              underlineColor="black"
              activeUnderlineColor="black"
              label="New Password"
              keyboardType="text"
              value={newPass}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                height: 50,
                marginVertical: 10,
              }}
              onChangeText={text => setNewPass(text)}
            />

            <TextInput
              textColor="black"
              secureTextEntry={true}
              underlineColor="black"
              activeUnderlineColor="black"
              label="Confirm Password"
              keyboardType="text"
              value={repeatNewPass}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                height: 50,
                marginVertical: 10,
              }}
              onChangeText={text => setRepeatNewPass(text)}
            />
            {!areSame ? (
              <>
                <Text
                  style={{
                    color: 'red',
                    // alignSelf: 'center',
                    marginTop: 5,
                    marginBottom: 10,
                    fontSize: 17,
                  }}>
                  Please, make sure your password match.
                </Text>
              </>
            ) : null}

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
                onPress={() => {
                  if (newPass !== repeatNewPass) {
                    setAreSame(false);
                  } else if (newPass.length < 8) {
                    console.log('Length less than 8 characters');
                  } else {
                    setAreSame(true);
                    resetPassword();
                  }
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
