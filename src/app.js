import { 
  incrementQty, 
  decrementQty,
  num,
  addSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const codeInput = document.querySelector('#code');
const confrButton = document.querySelector('#confirmButton')
const subtotal = document.querySelector('#subtotal');
let discount = 0;
const bayarButton = document.querySelector('#bayarButton');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  total();
});

decrButton.addEventListener('click', () => {
  if (qtyInput.value > 1) {
    qtyInput.value = decrementQty(qtyInput.value);
    subtotal();
  } else {
    qtyInput.value = 1;
    alert("Kuantitas minimal 1");
  }
  total();
});

qtyInput.addEventListener('focusout', () => {
  document.getElementById("qty").value = num(
    qtyInput.id,
    qtyInput.value
  );
  total();
});

priceInput.addEventListener('focusout', () => {
  document.getElementById("price").value = num(
    priceInput.id,
    priceInput.value
  );
  total();
});

confrButton.addEventListener('click', () => {
  if (codeInput.value === "promo1") {
    discount = 10;
    subtotal.textContent = `Rp. ${addSubtotal(
      priceInput.value, 
      qtyInput.value,
      discount
    )}`;
  } else if (codeInput.value === "promo2") {
    discount = 15;
    subtotal.textContent = `Rp. ${addSubtotal(
      priceInput.value, 
      qtyInput.value,
      discount
    )}`;
  } else if(codeInput.value === "promo3") {
    discount = 25;
    subtotal.textContent = `Rp. ${addSubtotal(
      priceInput.value, 
      qtyInput.value,
      discount
    )}`;
  } else if(codeInput.value === "promo4") {
    discount = 50;
    subtotal.textContent = `Rp. ${addSubtotal(
      priceInput.value, 
      qtyInput.value,
      discount
    )}`;
  } else {
    discount = 0;
    subtotal.textContent = `Rp. ${addSubtotal(
      priceInput.value, 
      qtyInput.value,
      discount
    )}`;
  }
});

function total() {
  subtotal.value = addSubtotal(priceInput.value, qtyInput.value);
  document.getElementById("subtotal").textContent = `Rp.${subtotal.value}`;
};

bayarButton.addEventListener('click', () => {
  alert(`Total yang harus dibayar Rp. ${subtotal.value}`)
});