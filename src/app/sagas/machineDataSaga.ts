import { call, put, select, takeLatest, all, fork } from 'redux-saga/effects';
import { message } from 'antd';
import { RootState } from '../store';
import { payloadType } from '../types';
import axios from 'axios';

import initialData from '../reducers/initialData';

function* getDataFromJson() {
    try {
        // const {data: products} = yield call(axios.get, 'http://localhost:5000/products');
        // const {data: withdraw} = yield call(axios.get, 'http://localhost:5000/withdraw');
        // const {data: user} = yield call(axios.get, 'http://localhost:5000/user');
        // const productCount = products.map((item: {name: string, price: number, count: number}) => item.count).reduce((count: number, curr: number) => count + curr, 0);
        // yield put({ type: 'SET_PRODUCT_DATA', payload: products });
        // yield put({ type: 'SET_MACHINE_WITHDRAW', payload: withdraw });
        // yield put({ type: 'SET_MACHINE_BALANCE', payload: user.balance });
        // yield put({ type: 'SET_PRODUCT_COUNT', payload: productCount });
        const { data } = yield call(axios.get, 'http://localhost:5000/machine');
        const productCount = data.products.map((item: {name: string, price: number, count: number}) => item.count).reduce((count: number, curr: number) => count + curr, 0);
        yield put({ type: 'SET_PRODUCT_DATA', payload: data.products });
        yield put({ type: 'SET_MACHINE_WITHDRAW', payload: data.withdraw });
        yield put({ type: 'SET_MACHINE_BALANCE', payload: data.balance });
        yield put({ type: 'SET_PRODUCT_COUNT', payload: productCount });
    } catch (e) {
        message.error('Error!');
    }
}

function* increaseMachineBalance(payload: payloadType) {
    try {
        const { balance, products } = yield select((state: RootState) => state.machineData);
        yield call(axios.post, 'http://localhost:5000/machine', {
            products,
            withdraw: payload.changedWithdraw,
            balance: balance + payload.cashValue
        });
        yield call(getDataFromJson);
    } catch (e) {
        message.error('Error');
    }
}

function* decreaseMachineBalance(payload: payloadType) {
    try {
        const { products } = yield select((state: RootState) => state.machineData);
        const changedProduct = payload.changedProduct.length ? payload.changedProduct : products
        yield call(axios.post, 'http://localhost:5000/machine', {
            products: changedProduct,
            withdraw: payload.changedWithdraw,
            balance: 0
        });
        yield call(getDataFromJson);
    } catch (e) {
        message.error('Error');
    } 
}

function* changeMachineProduct(payload: payloadType) {
    try {
        const { withdraw, balance } = yield select((state: RootState) => state.machineData);
        yield call(axios.post, 'http://localhost:5000/machine', {
            products: payload.changedProduct,
            withdraw,
            balance
        });
        yield call(getDataFromJson);
    } catch (e) {
        message.error('Error');
    } 
}

function* getProductAndChangeData(payload: payloadType) {
    try {
        const { balance, withdraw } = yield select((state: RootState) => state.machineData);
        yield call(axios.post, 'http://localhost:5000/machine', {
            products: payload.changedProduct,
            withdraw,
            balance: payload.price ? (balance - payload.price) : balance
        });
        yield call(getDataFromJson);
    } catch (e) {
        message.error('Error');
    }  
}

function* resetMachineData() {
    try {
        yield call(axios.post, 'http://localhost:5000/machine', initialData);
        yield call(getDataFromJson);
    } catch (e) {
        message.error('Error');
    }  
}

export function* machineDataSaga() {
    yield all([
        takeLatest('GET_MACHINE_DATA_FROM_JSON', getDataFromJson),
        takeLatest('INCREASE_MACHINE_BALANCE', increaseMachineBalance),
        takeLatest('DECREASE_MACHINE_BALANCE', decreaseMachineBalance),
        takeLatest('BUY_PRODUCT', getProductAndChangeData),
        takeLatest('CHANGE_MACHINE_PRODUCT', changeMachineProduct),
        takeLatest('RESET_MACHINE_DATA', resetMachineData),
    ]);
}