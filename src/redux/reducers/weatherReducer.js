// Initial State
const initialState = {
  weather: null,
  loading: false,
  error: false,
  coords: null,
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_START':
      return {
        ...state,
        weather: '',
        loading: true,
        error: false,
      };
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weather: action.weather,
        loading: false,
        error: false,
      };
    case 'FETCH_WEATHER_ERROR':
      return {
        ...state,
        weather: '',
        coords: '',
        loading: false,
        error: true,
      };
    case 'FETCH_WEATHER_COORD':
      return {
        ...state,
        loading: false,
        error: false,
        coords: action.coords,
      };
    default: {
      return state;
    }
  }
};
export default weatherReducer;
