import { Button, Select, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { productType, withdrawType } from '../types';

const CashOperationComponent: React.FC = () => {
    const dispatch = useDispatch();

    const { withdraw, balance, products } = useSelector((state: RootState) => state.machineData);
    const [cashValue, setCashValue] = useState(null);

    const depositCash = () => {
        if (cashValue) {
            const changedWithdraw = withdraw.map((item: withdrawType) => (
                item.value === cashValue ? {...item, count: item.count + 1} 
                    : (item.value * 2) === 1000 && cashValue === 1000 ? {...item, count: item.count + 2} 
                        : item
            ))     
            dispatch({ type: 'INCREASE_MACHINE_BALANCE', cashValue, changedWithdraw });
        } 
    }

    
    const calculateCashback = () => {
        const reverseCash = [...withdraw].reverse();
        let changedBalance = balance;
        
        let cashBack: {value: number, count: number}[] = [];
        let count = 0;
        let i = 1;  
        while (changedBalance > 0) { 
            if (changedBalance < reverseCash[count].value) {
                count++;
                i = 1; 
            } else if (changedBalance >= reverseCash[count].value * (i + 1)) {
                i++
            } else {
                cashBack.push({value: reverseCash[count].value, count: i})
                changedBalance -= reverseCash[count].value * i;
                count++;
                i = 1;
            }
        }

        let debtAmount = balance;
        const changedWithdraw = [...withdraw].reverse().map((item: withdrawType) => {
            if (item.count !== 0 && debtAmount > 0 && debtAmount >= item.value) {
                let counter = 0;
                while (debtAmount >= item.value && counter !== item.count) {
                    debtAmount -= item.value;
                    counter++;
                }
                return {...item, count: item.count - counter}
            }
            return item;
        })

        if (cashBack.length > 0) {
            let cashbackMessage = 'Вы получили ';
            cashBack.forEach(item => (cashbackMessage = cashbackMessage + item.value + ' руб. в количестве ' + item.count + ', '));
            message.success(cashbackMessage, 10);
        } 
        if (debtAmount) message.success(`а также: ${debtAmount} руб. в виде:`, 10)

        let changedProduct = products;
        if (debtAmount !== 0) {
            let debtProducts = [];
            while (debtAmount > 0) {
                const intermediateProduct = changedProduct;
                let debtProduct = {price: 0, name: ''}
                intermediateProduct.forEach((item: productType) => {
                    if ((debtAmount > item.price || debtAmount * 2 >= item.price) && debtProduct.price < item.price && item.count !== 0) debtProduct = {price: item.price, name: item.name};
                })
                if (debtProduct.price === 0) {
                    debtAmount = 0;
                }
                debtAmount -= debtProduct.price;
                debtProducts.push(debtProduct)
                changedProduct = intermediateProduct.map((item: productType) => (
                    (item.name === debtProduct.name && item.count !== 0) ? {...item, count: item.count - 1} : item
                ));
            }
            let debtsMessage = '';
            debtProducts.forEach(item => (debtsMessage = debtsMessage + item.name + ' в количестве 1шт, '));
            message.success(debtsMessage, 10);
        }

        return {changedWithdraw: changedWithdraw.reverse(), changedProduct}
    }

    const withdrawCash = () => {
        if (balance !== 0) {
            const {changedWithdraw, changedProduct } = calculateCashback();
            dispatch({ type: 'DECREASE_MACHINE_BALANCE', changedWithdraw, changedProduct });
        }
    }

    const cashOptions = [
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 500, label: '500' },
        { value: 1000, label: '1000' },
    ]

    return (
        <div className='operationButtons'>
            <div className='depositCash'>
                <Select 
                    placeholder='Выберите сумму'
                    onChange={(value) => setCashValue(value)}
                    options={cashOptions}
                />
                <Button onClick={depositCash}>Внести</Button>
            </div>
            <Button className='withdrawCash' onClick={withdrawCash}>Получить сдачу</Button>
        </div>
    );
};

export default CashOperationComponent; 