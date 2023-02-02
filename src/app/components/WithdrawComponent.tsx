import { Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { withdrawType } from '../types';

const WithdrawComponent: React.FC = () => {
    const withdraw: withdrawType[] = useSelector((state: RootState) => state.machineData.withdraw);

    return (
        <Card title="Валюта банкомата" className='withdrawCard'>
            {withdraw.map((item, index) => (
                <div key={index}>Номинал: {item.value}, количетсво: {item.count}</div>
            ))}
        </Card>
    );
};

export default WithdrawComponent; 