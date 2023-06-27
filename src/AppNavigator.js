import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import VerifyOTP from './screens/VerifyOTP';
import ResetPassword from './screens/ResetPassword';
import PassSuccessful from './screens/PasswordChangeSuccessful';
import LoginOtpVerified from './screens/LoginOtpVerified';
import SomethingWentWrong from './screens/SomethingWentWrong';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SomethingWentWrong"
          component={SomethingWentWrong}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginOtpVerified"
          component={LoginOtpVerified}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PassSuccessful"
          component={PassSuccessful}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
