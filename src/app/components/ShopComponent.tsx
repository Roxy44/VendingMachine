import React from 'react';

import { Button, Empty, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store'

import { productType } from '../types';

const ShopComponent: React.FC = () => {
    const products = useSelector((state: RootState) => state.machineData.products);
    const balance = useSelector((state: RootState) => state.machineData.balance);

    const dispatch = useDispatch();

    const buyProduct = (id: number, price: number) => {
        if (balance >= price) {
            const changedProduct = products.map((item: productType, index: number) => (
                index === id ? {name: item.name, count: item.count - 1, price: item.price} : item
            ))       
            dispatch({ type: 'BUY_PRODUCT', productId: id, price, changedProduct});
            message.success(`Вы купили ${products.filter((_: any, index: number) => index === id)[0].name}`);  
        } else {
            message.warning('Недостаточно средств для покупки, пополните баланс!');
        }
    }

    return (
        <div className='shopContainer'>
            {products.length ?
                products.map((item: productType, index: number) => (
                    <div key={index} className='shopShelf'>
                        {item.count !== 0 ?
                        <Button onClick={() => buyProduct(index, item.price)}>
                            <span style={{"whiteSpace": "pre-line"}}>
                                {
                                    `${item.name}
                                    Стоимость: ${item.price}
                                    Осталось: ${item.count} шт.`
                                }
                            </span>
                        </Button>
                        :
                        <div className='noProduct' >
                            <CloseOutlined className='noProductIcon'/>
                            <span>Нет в наличии</span>
                        </div>}
                    </div>
                ))
            :
                <div className='noProduct dataBaseError'>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
            }
        </div>
    );
};

export default ShopComponent; 