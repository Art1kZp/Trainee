import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatItemSecond = ({item}) => {
  const dataFormat = dt => {
    const unixTime = dt;
    const date = new Date(unixTime * 1000);
    return date.toLocaleString("en-US", {hour: "numeric"})
  };
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>hour: {dataFormat(item.dt)}</Text>
      <Text style={styles.Text}>temp: {item?.temp}</Text>
      <Text style={styles.Text}>humidity: {item?.humidity}</Text>
      <Text style={styles.Text}>wind_speed: {item?.wind_speed}</Text>
      <Text style={styles.Text}>__________</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    width: 200,
  },
  Text: {
    fontSize: 18,
    alignSelf: 'center',
  },
});
export default FlatItemSecond;
