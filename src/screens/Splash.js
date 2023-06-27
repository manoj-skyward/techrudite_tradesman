import {View, Text, Image, TextInput, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text style={{fontSize: 18, color: 'red', fontWeight: '700'}}></Text> */}
      <Image
        source={require('../images/splash.png')}
        style={{size: 'cover', height: '50%', width: '100%'}}
      />
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
        TRADESMAN
      </Text>
    </View>
  );
};

export default Splash;
