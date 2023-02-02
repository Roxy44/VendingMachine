import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import './App.css';

import OperationComponent from './app/components/OperationComponent';
import ShopComponent from './app/components/ShopComponent';
import WithdrawComponent from './app/components/WithdrawComponent';
import { RootState } from './app/store';

const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => state.machineData.count);
    
    useEffect(() => {
        dispatch({ type: 'GET_MACHINE_DATA_FROM_JSON' });
    }, []);

    const resetMchineData = () => {
        dispatch({ type: 'RESET_MACHINE_DATA' });
    }

    return (
        <div className='App'>
            <div className='adminPanel'>
                <Button type='primary' style={count === 0 ? {background: 'red'} : {background: 'grey'}} onClick={() => resetMchineData()}>
                    Обновить магазин
                </Button>
            </div>
            <div className='container'>
                <WithdrawComponent />
                <div className='ATMContainer'>
                    <ShopComponent />
                    <OperationComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
