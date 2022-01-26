import React, {useState} from 'react';
import {fetchWeatherStart} from '../../redux/reducers/action/action';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import FlatItem from '../../components/FlatListItem';
import FlatItemSecond from '../../components/FlatListItem2';

function WeatherScreen() {
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const loading = useSelector(state => state.weather.loading);
  const error = useSelector(state => state.weather.error);
  const weather = useSelector(state => state.weather.weather);
  const coords = useSelector(state => state.weather.coords);

  const weatherMain = weather?.main?.temp;
  const coordsDaily = coords?.daily;
  const coordsHourly = coords?.hourly;

  const toogleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const onFetchWeatherStart = () => {
    dispatch(fetchWeatherStart(text));
    toogleModal();
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../images/backgroundWeather.jpg')}
        resizeMode="cover">
        <ScrollView>
          <TouchableOpacity onPress={toogleModal}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                alignSelf: 'center',
                color: 'blue',
                fontWeight: 'bold',
              }}>
              Weather data for any location
            </Text>
            <View>
              <Modal style={styles.Modal} visible={isModalVisible}>
                <View style={styles.ModalView}>
                  <Text style={styles.Text}>City Name</Text>
                  <TextInput
                    style={styles.TextInput}
                    value={text}
                    onChangeText={text => setText(text)}
                  />
                  <TouchableOpacity onPress={onFetchWeatherStart}>
                    <Text style={styles.Button}>Find</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <View>
                {loading ? (
                  <Text>Loading...</Text>
                ) : (
                  <View>
                    {!!weather && (
                      <Text style={styles.TextC}>
                        {text} {weatherMain} °
                      </Text>
                    )}
                  </View>
                )}
                {!!error && (
                  <Text style={styles.Error}>Something went wrong...</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <FlatList
              horizontal
              data={coordsDaily}
              renderItem={({item}) => <FlatItem item={item} />}
            />
          </View>
          <View style={styles.View}>
            {coordsHourly &&
              coordsHourly.map(item => <FlatItemSecond item={item} />)}
          </View>
          {/*<FlatList*/}
          {/*  // horizontal*/}
          {/*  data={coordsHourly}*/}
          {/*  renderItem={({item}) => <FlatItemSecond item={item} />}*/}
          {/*/>*/}

          {/*<ScrollView*/}
          {/*  //horizontal*/}
          {/*  style={styles.contentContainer}*/}
          {/*  showsHorizontalScrollIndicator={false}*/}
          {/*  showsVerticalScrollIndicator={false}*/}
          {/*>*/}
          {/*  {coordsDaily &&*/}
          {/*    coordsDaily.map((item) => (*/}
          {/*          <View>*/}
          {/*            <Text>Date: {item.dt}</Text>*/}
          {/*            <Text>Day degrees: {item.temp.day}</Text>*/}
          {/*            <Text>Night degrees: {item.temp.night}</Text>*/}
          {/*            <Text>Clouds: {item.clouds}</Text>*/}
          {/*          </View>*/}
          {/*        ))*/}
          {/*    }*/}
          {/*</ScrollView>*/}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    // marginTop: 50,
    paddingVertical: 20,
    backgroundColor: '#F5FCFF',
    backgroundImage: '',
  },
  TextInput: {
    width: 200,
    height: 50,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  Modal: {
    height: 600,
    backgroundColor: 'grey',
  },
  ModalView: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 40,
    paddingVertical: 50,
  },
  View: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
  },
  Button: {
    color: 'blue',
    fontSize: 18,
    paddingVertical: 10,
  },
  Text: {
    fontSize: 20,
    // marginVertical: 15,
    alignSelf: 'center',
  },
  TextC: {
    fontSize: 25,
    // marginVertical: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  Error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
export default WeatherScreen;
