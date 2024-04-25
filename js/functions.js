function showProducts(category) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    productsData[category].forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product.name;
        listItem.onclick = function() {
            selectedProduct = product;
            showProductInfo(product);
        };
        productList.appendChild(listItem);
    });

    document.getElementById('productInfo').style.display = 'none';
}

function showProductInfo(product) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productInfo').style.display = 'block';
}

function showOrderForm() {
    document.getElementById('orderForm').style.display = 'block';
}

function submitOrder(event) {
    event.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const city = document.getElementById('city').value;
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (clientName === '' || city === '' || quantity === '') {
        alert('Please fill in all fields.');
        return;
    }

    const orderDetails = `
        Product: ${selectedProduct.name}
        Description: ${selectedProduct.description}
        Price: ${selectedProduct.price}

        Buyer: ${clientName}
        City: ${city}
        Delivery Method: ${deliveryMethod}
        Quantity: ${quantity}
        Comment: ${comment}
    `;

    document.getElementById('orderDetails').textContent = orderDetails;
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderConfirmation').style.display = 'block';
}