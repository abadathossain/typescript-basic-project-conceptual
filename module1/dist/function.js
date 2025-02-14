"use strict";
const addArrow = (num1, num2) => {
    return num1 + num2;
};
const result = addArrow(2, 3);
console.log(result);
const poorUser = {
    name: 'Abadat',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
