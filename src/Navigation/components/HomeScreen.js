import React from 'react';
import {Text, Button, View} from 'react-native';

function HomeScreen({navigation, route}) {
  const [count, setCount] = React.useState(0);

  return (
    <View style={{flex: 1, alignItems: 'center', marginVertical: 100}}>
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      <Text>Count: {count}</Text>
      <Button
        title="Create Message"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text>Your Message: {route.params?.post}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to ...." onPress={() => navigation.navigate('New')} />
    </View>
  );
}

export default HomeScreen;
