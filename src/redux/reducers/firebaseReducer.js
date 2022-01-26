// Initial State
const initialState = {
  title: null,
  id: null,
  error: false,
};
const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIREBASE_SUCCESS':
      return {
        ...state,
        title: action.payload[0].title,
        id: action.payload[0].id,
        error: false,
      };
    case 'FIREBASE_ERROR':
      return {
        ...state,
        error: true,
      };
    default: {
      return state;
    }
  }
};
export default firebaseReducer;
