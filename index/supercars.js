
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
                li.textContent = `${item.name} - $${item.price} - Color: ${item.color}`;
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
            document.getElementById('total').textContent = total;
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
  