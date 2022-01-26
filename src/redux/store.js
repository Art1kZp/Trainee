import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './reducers/combineReducer';


import { composeWithDevTools } from 'redux-devtools-extension';// ...
import {rootSaga} from './reducers/saga/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
