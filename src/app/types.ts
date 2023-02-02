export type actionType = {
    type: string,
    payload: any,
}

export type productType = {
    name: string,
    count: number,
    price: number,
}

export type withdrawType = {
    value: number,
    count: number,
}

export type payloadType = {
    type: string,
    cashValue?: number,
    productId?: number,
    price?: number, 
    changedProduct: productType[],
    changedWithdraw: withdrawType[],
}