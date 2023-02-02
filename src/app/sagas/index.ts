import { fork, all } from 'redux-saga/effects';
import { machineDataSaga } from './machineDataSaga';

export default function* rootSaga() {
    yield all([
        fork(machineDataSaga)
    ]);
}