import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_DATA} from '../redux/action/type';
import {saveApiData} from '../redux/action';
import {url} from '../utils/constant';
import {getApidata} from '../redux/reduxTypes';

interface fetchApiType {
  [x: string]: any;
  limit: number;
  products: getApidata[];
}

function* fetchApiData() {
  try {
    const response: fetchApiType = yield call(fetch, url);
    const data: fetchApiType = yield response.json();
    yield put(saveApiData(data.products));
  } catch (error) {
    console.log(error);
  }
}

function* DataSaga() {
  yield takeLatest(FETCH_DATA, fetchApiData);
}

export default DataSaga;
