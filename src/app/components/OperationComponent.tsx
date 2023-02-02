import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CashOperationComponent from './CashOpertaionComponent';

const OperationComponent: React.FC = () => {

    const balance = useSelector((state: RootState) => state.machineData.balance);

    return (
        <div className='techMenu'>
            <div className='userIntrfaceContainer'>
                <div className='balance'>
                    БАЛАНС : {balance}
                </div>
                <div className='buyProduct'></div>
            </div>
            <CashOperationComponent />
        </div>
    );
};

export default OperationComponent; 