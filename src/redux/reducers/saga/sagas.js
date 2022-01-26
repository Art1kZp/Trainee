import {put, takeEvery, all, call, takeLatest} from 'redux-saga/effects';
import {
  requestDog,
  requestDogError,
  requestDogSuccess,
  fetchWeatherSuccess,
  fetchWeatherError,
  fetchWeatherCoord,
} from '../action/action';
import apiAddTodo from '../../../api/apiFirebaseAddTodo';
import {
  requestTodoError,
  requestTodoSuccess,
  addTodoSuccess,
  addTodoError,
  deleteTodoSuccess,
  deleteTodoError,
  editTodoSuccess,
  editTodoError} from '../action/actionTodo';
import apiGetTodo from '../../../api/apiGetTodos';
import apiDeleteTodo from '../../../api/apiDeleteTodo';
import apiEditTodo from '../../../api/apiEditTodo';
const delay = ms => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(2000);
  yield put({type: 'INCREMENT', value: 1});
}
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield all([takeEvery('INCREMENT_ASYNC', incrementAsync)]);
}
function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    //yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random').then(res =>
        res.json(),
      );
    });
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}
function* fetchWeatherSaga(action) {
  try {
    const weatherResponse = yield call(() => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=19ac47b88d8c24af1610953bdb28cf9b&units=metric`,
      );
    });
    const data = yield weatherResponse.json();
    yield put(fetchWeatherSuccess(data));
    const coordLat = data.coord.lat;
    const coordLon = data.coord.lon;
    const weatherCoordResponse = yield call(() => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordLat}&lon=${coordLon}&exclude=minutely&appid=19ac47b88d8c24af1610953bdb28cf9b&units=metric`,
      );
    });
    const coord = yield weatherCoordResponse.json();
    yield put(fetchWeatherCoord(coord));
  } catch (error) {
    yield put(fetchWeatherError(error.message));
  }
}
function* watchFetchWeatherSaga() {
  yield takeEvery('FETCH_WEATHER_START', fetchWeatherSaga);
}

function* fetchAddTodo(action) {
  try {
    yield call(apiAddTodo, action.payload);
    yield put(addTodoSuccess());
  } catch (error) {
    yield put(addTodoError(error));
  }
}
function* watchFetchAddTodo() {
  yield takeEvery('FETCH_ADD_TODO', fetchAddTodo);
}
function* fetchGetTodo() {
  try {
    const todoList = yield call(apiGetTodo);
    yield put(requestTodoSuccess(todoList));
  } catch (error) {
    yield put(requestTodoError(error));
  }
}
function* watchGetTodo() {
  yield takeEvery('REQUESTED_TODO', fetchGetTodo);
}
function* fetchDeleteTodo(action) {
  try {
    const todoList = yield call(apiDeleteTodo, action.payload);
    yield put(deleteTodoSuccess(todoList));
  } catch (error) {
    yield put(deleteTodoError(error));
  }
}
function* watchDeleteTodo() {
  yield takeEvery('DELETE_TODO', fetchDeleteTodo);
}
function* fetchEditTodo(action) {
  try {
    const todoList = yield call(apiEditTodo, action.payload);
    yield put(editTodoSuccess(todoList));
  } catch (error) {
    yield put(editTodoError(error));
  }
}
function* watchEditTodo() {
  yield takeEvery('FETCH_EDIT_TODO', fetchEditTodo);
}
export function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFetchDog(),
    watchFetchWeatherSaga(),
    watchFetchAddTodo(),
    watchGetTodo(),
    watchDeleteTodo(),
    watchEditTodo(),
  ]);
}
