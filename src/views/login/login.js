import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = (props) => {
  return (
    <View>
      <Text>Im login</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('register');
        }}>
        <Text>Navigate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('tabs');
        }}>
        <Text>Go to tabs</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
