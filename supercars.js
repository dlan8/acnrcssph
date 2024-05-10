
        let cartItems = [];

      function addToCart(productName, price, colorGroupName) {
    // Find the selected color radio button
    const selectedColor = document.querySelector('input[name="' + colorGroupName + '"]:checked');
    
    if (selectedColor) {
        const color = selectedColor.value;
        
        // Create a new item object
        const item = {
            name: productName,
            price: price,
            color: color
        };
        
        // Push the item to the cart array
        cartItems.push(item);

        // Update the cart display
        updateCart();

        // Update the total
        updateTotal();
    } else {
        alert("Please select a color.");
    }
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
  
