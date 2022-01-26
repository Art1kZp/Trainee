import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDog} from '../../redux/reducers/action/action';

function NewPageScreen() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.sagareducer.loading);
  const error = useSelector(state => state.sagareducer.error);
  const url = useSelector(state => state.sagareducer.url);

  const onFetchDog = () => {
    dispatch(fetchDog());
  };

  return (
    <View
      style={{
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onFetchDog}>
        <Text style={{fontSize: 20, marginVertical: 50, color: 'blue'}}>
          Click Me
        </Text>
      </TouchableOpacity>
      {!!loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {!!url && (
            <Image
              style={{width: 150, height: 150}}
              source={{
                uri: url,
              }}
            />
          )}
        </View>
      )}
      {!!error && (
        <Text>Error</Text>
      )}
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default NewPageScreen;

