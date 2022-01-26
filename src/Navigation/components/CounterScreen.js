import React from 'react';
import {Text, View} from 'react-native';
import Counter from '../../components/Counter';

function CounterScreen() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Counter />
    </View>
  );
}
export default CounterScreen;
