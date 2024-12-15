/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  return (
    <View>
      <Text>Vertere 3</Text>
      <Text>Entorno Actual: {Config.ENV}</Text>
      <Text>API URL: {Config.API_URL}</Text>
    </View>
  );
}


export default App;
