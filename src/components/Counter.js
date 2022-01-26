import React from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Increase, Decrease, IncreaseAsync} from '../redux/reducers/action/action';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.sagareducer.counter);

  const onIncrement = () => {
    dispatch(Increase());
  };
  const onDecrement = () => {
    dispatch(Decrease());
  };
  const onIncrementAsync = () => {
    dispatch(IncreaseAsync());
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.counterText}>Count: {count} </Text>
      </View>
      <View>
        <Button title="Increment after 2 second" onPress={onIncrementAsync} />
        <Button title="Increment" onPress={onIncrement} />
        <Button title="Decrement" onPress={onDecrement} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 52,
  },
});
export default Counter;
