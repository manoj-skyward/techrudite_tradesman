import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';

const Dashboard = ({route, navigation}) => {
  //   const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          color: 'red',
          fontWeight: '700',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Hi {route.params.email}..!
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '700',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        You Have Successfully LoggedIn
      </Text>

      <View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 250,
            marginTop: 10,
            backgroundColor: '#314fa4',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Go Back To Register Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
