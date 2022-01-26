export const Increase = () => {
  return {
    type: 'INCREMENT',
    value: 1,
  };
};
export const Decrease = () => {
  return {
    type: 'DECREMENT',
    value: 1,
  };
};
export const IncreaseAsync = () => {
  return {
    type: 'INCREMENT_ASYNC',
    value: 1,
  };
};
export const requestDog = () => {
  return {
    type: 'REQUESTED_DOG',
  };
};
export const requestDogSuccess = data => {
  return {
    type: 'REQUESTED_DOG_SUCCEEDED',
    url: data.message,
  };
};
export const requestDogError = () => {
  return {
    type: 'REQUESTED_DOG_FAILED',
  };
};
export const fetchDog = () => {
  return {type: 'FETCHED_DOG'};
};
export const fetchWeatherStart = city => {
  return {
    type: 'FETCH_WEATHER_START',
    payload: city,
  };
};
export const fetchWeatherSuccess = data => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    weather: data,
  };
};
export const fetchWeatherError = () => {
  return {
    type: 'FETCH_WEATHER_ERROR',
  };
};
export const fetchWeatherCoord = coord => {
  return {
    type: 'FETCH_WEATHER_COORD',
    coords: coord,
  };
};
