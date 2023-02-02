import { combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { machineDataReducer } from './reducers/machineDataReducer';
import rootSaga from '../app/sagas/index';

const rootReducer = combineReducers({
    machineData: machineDataReducer,
});
  
const sagaMiddleware = createSagaMiddleware();
  
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;