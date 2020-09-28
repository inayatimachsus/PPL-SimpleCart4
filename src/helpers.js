const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if (qty > 1) return qty - 1;
        return qty;
};

function num(id, value) {
    if (isNaN(value) || value < 0) {
        if (id == "price") {
            return "0";
        } else if (id == "qty") {
            return "1";
        } else {
            return "0";
        }
    } else {
        return value;
    }
}

const addSubtotal = (price, qty, discount = 0) => (1 - parseFloat(discount)/100)*price*qty;

module.exports = { 
    incrementQty, 
    decrementQty,
    num,
    addSubtotal
};
