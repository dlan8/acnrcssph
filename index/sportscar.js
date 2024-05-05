    let cartItems = [];

    function addToCart(productName, price) {
        cartItems.push({ name: productName, price: price });
        updateCart();
    }

    function updateCart() {
        let cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';
        let total = 0;
        cartItems.forEach((item, index) => {
            let li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
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
        alert('Checkout complete!');
        cartItems = [];
        updateCart();
    }
