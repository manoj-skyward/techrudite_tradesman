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

const SignUp = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setUserDetails({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userName: '',
    });
    setIsChecked(false);
  }, []);

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
  });
  const registerUser = async () => {
    const {firstName, lastName, email, password, userName} = userDetails;

    const ccMail = email;

    try {
      let response = await axios.post(BASE_URL + 'register', {
        fname: firstName,
        lname: lastName,
        email,
        password,
        username: userName,
      });
      console.log('\n\n Value issssss\n\n', response.data);

      if (response.data.success) {
        navigation.navigate('VerifyOTP', {
          email,
          fromSignUp: true,
          fromForgotPass: false,
        });
      }
    } catch (err) {
      setUserDetails({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userName: '',
      });
      setIsChecked(false);
      console.log('\n\n Somehting Went Wrong\n\n', err?.response?.data);
    }
  };

  const handleInputChange = (text, input) => {
    // const handleOnchange = (text, input) => {
    setUserDetails(prevState => ({...prevState, [input]: text}));
    // };
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
        <View style={{height: '25%', backgroundColor: 'red'}}>
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
            height: '75%',
            // backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '85%'}}>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                // marginTop: 15,
                marginVertical: 5,
              }}>
              Sign Up
            </Text>
            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="First Name"
              value={userDetails.firstName}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                marginVertical: 5,
                height: 50,
              }}
              onChangeText={text => handleInputChange(text, 'firstName')}
            />
            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="Last Name"
              value={userDetails.lastName}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                marginVertical: 5,
                height: 50,
              }}
              onChangeText={text => handleInputChange(text, 'lastName')}
            />
            <TextInput
              textColor="black"
              underlineColor="black"
              activeUnderlineColor="black"
              label="Username"
              value={userDetails.userName}
              // Type={'}
              style={{
                width: '100%',
                backgroundColor: 'white',
                marginVertical: 5,
                height: 50,
              }}
              onChangeText={text => handleInputChange(text, 'userName')}
            />
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
                marginVertical: 5,
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
                marginVertical: 5,
                height: 50,
              }}
              onChangeText={text => handleInputChange(text, 'password')}
            />
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Checkbox
                style={{width: '10%', alignItems: 'flex-start'}}
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setIsChecked(!isChecked);
                }}
                color={'black'}
              />
              <View style={{width: '90%'}}>
                <Text style={{color: 'black'}}>
                  By clicking here you agreed to our{' '}
                  <Text style={{fontWeight: 'bold', color: 'blue'}}>
                    Terms and Condition
                  </Text>
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity
                disabled={!isChecked}
                style={{
                  height: 50,
                  marginTop: 10,
                  backgroundColor: '#314fa4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                }}
                onPress={registerUser}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '100%'}}>
              <Text style={{color: 'black', marginVertical: 10, fontSize: 12}}>
                We will share OTP to your Email ID for authentication
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  marginTop: 5,
                  marginBottom: 15,
                }}>
                Already have an account?{' '}
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
