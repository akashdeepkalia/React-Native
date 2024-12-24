import { View, Text, Button } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={ { fontSize : 30 } }>Hello React Native</Text>
      <Text style={ { fontSize : 30 } }>Abhu agya e oye</Text>
      <Button title="Press Me" onPress={ () => alert('Button Pressed!') } />
    </View>
  );
};

export default App;