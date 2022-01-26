import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatItem = ({item}) => {
  const dataFormat = dt => {
    const unixTime = dt;
    const date = new Date(unixTime * 1000);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Date: {dataFormat(item.dt)}</Text>
      <Text>Day degrees: {item?.temp?.day}</Text>
      <Text>Night degrees: {item?.temp?.night}</Text>
      <Text>Clouds: {item?.clouds}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    width: 300,
    marginVertical: 20,
    // height: 20,
  },
  Text: {
    fontSize: 18,
    marginVertical: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
export default FlatItem;
