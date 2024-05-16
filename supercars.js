let cartItems = [];

function addToCart(productName, price, colorGroupName) {
    let selectedColor = getSelectedColor(colorGroupName);
    cartItems.push({ name: productName, price: price, color: selectedColor });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)} - Color: ${item.color}`;
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            cartItems.splice(index, 1);
            updateCart();
        };
        li.appendChild(removeBtn);
        cartList.appendChild(li);
        total += item.price;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    alert('Congratulations! Checkout complete');
    cartItems = [];
    updateCart();
}

function getSelectedColor(colorName) {
    let selectedColor = document.querySelector(`input[name="${colorName}"]:checked`);
    if (selectedColor) {
        return selectedColor.value;
    }
    return 'No color selected';
}

function generateReceipt() {
    let receipt = "<ul>";
    cartItems.forEach((item) => {
        receipt += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    });
    receipt += `<li id="total-receipt">Total: $${getTotal().toFixed(2)}</li></ul>`;
    return receipt;
}

function closeReceipt() {
    let receiptContainer = document.getElementById('receipt-container');
    receiptContainer.style.display = 'none';
}

function displayReceipt(receipt) {
    let receiptItems = document.getElementById('receipt-items');
    let totalReceipt = document.getElementById('total-receipt');
    receiptItems.innerHTML = receipt;
    let receiptContainer = document.getElementById('receipt-container');
    receiptContainer.style.display = 'block';
}

function getTotal() {
    let total = 0;
    cartItems.forEach((item) => {
        total += item.price;
    });
    return total;
}

function buyItems() {
    let receipt = generateReceipt();
    displayReceipt(receipt);
    cartItems = [];
    updateCart();
    alert('Thank you for your purchase!');
}
