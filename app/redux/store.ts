import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import MainReducer from './reducer/index';
import {DataSaga} from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(MainReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(DataSaga);

export {store};
