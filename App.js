import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import First from './src/Navigation/components/First';

function App() {
  return (
    <Provider store={store}>
      <First />
    </Provider>
  );
}
export default App;
