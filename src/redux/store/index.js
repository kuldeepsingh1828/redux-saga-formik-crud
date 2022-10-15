import { applyMiddleware, createStore } from "redux";
import reducer from '../reducer';
import createSagaMiddleware from "redux-saga";

import { watcher } from '../../sagas/watcher/';

let sagaMiddleware = createSagaMiddleware();

let middleWares = [sagaMiddleware];

export default createStore(reducer, applyMiddleware(...middleWares));

sagaMiddleware.run(watcher);