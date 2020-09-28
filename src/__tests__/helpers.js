/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    addSubtotal
} = require('../helpers.js')

test('Qty 1 ditambahkan 1 hasilnya 2', () => {
    expect(incrementQty(1,1)).toBe(2);
});

test('Qty 1 ditambahkan "1" hasilnya 2', () => {
    expect(incrementQty("1",1)).toBe(2);
});

test('decrementQty bisa berkurang', () => {
    expect(decrementQty(2,1)).toBe(1);
});

test('Subtotal dari 25000 dan qty 2 adalah 50000', () => {
    expect(addSubtotal(25000,2)).toBe(50000);
});

test('subtotal dengan inputan string', () => {
    expect(addSubtotal('25000',4)).toBe(100000);
});

test('decrementQty seharusnya tidak berkurang ketika qty > 0', () =>{
    expect(decrementQty(1,1)).toBe(1);
});

test('subtotal dengan discount', () => {
    expect(addSubtotal(50000, 3, 50)).toBe(75000);
});