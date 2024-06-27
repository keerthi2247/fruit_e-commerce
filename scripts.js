// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Apple', price: 1.2, image: 'https://lh3.googleusercontent.com/proxy/SnqlTdaCbI73GaM4xKMyfHKib3AVnr2aVUpiPFlrsll-TWAJzL9VFWpAYOs5iRHzUBngxpkCzH0EHqnhUzQVB2zm_kS2Vyuy9SzljcamzsSk--yj' },
        { name: 'Banana', price: 0.5, image: 'https://media.istockphoto.com/id/1494763483/photo/banana-concept.webp?b=1&s=170667a&w=0&k=20&c=YZVpR1AFJkXVxOrkRshzU1vvDVAlTDW2TNv5IOvZxSM=' },
        { name: 'Cherry', price: 2.0, image: 'https://draxe.com/wp-content/uploads/2018/11/DrAxeCherriesThumbnail.jpg' },
        { name: 'Pomegranate', price: 1.5, image: 'https://imgs.search.brave.com/klNW3qwmaCTE-ot1bQU0mRNhNxJPzwjewxpafRdTQXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/MS8xOC8xNS81Ny9m/cnVpdHMtMzk0MDAy/MV82NDAuanBn' },
        { name: 'Grapes', price: 1.0, image: 'https://imgs.search.brave.com/1pS9Eah1uD1gQ_rmpBsmqcxWjgeyhdyxWwpxOJEUStI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU4/NDMxMDIvcGhvdG8v/Z3JhcGVzLWNsdXN0/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXB1NHhGeWxv/anhBMGl3Q3Q1V1pR/VkFQb3gwTXdGdXZO/Tk13S2dfY3hOMkk9' },
        { name: 'Mango', price: 1.8, image: 'https://imgs.search.brave.com/Pl-hUZ-vmDzGzgBCfoTP5D1UIZ0vETVGNYELWvEcXQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjQx/OTI0OTQwL3Bob3Rv/L21hbmdvZXMtY29t/cG9zaXRpb24tYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TjYw/dnpBSTE2ekp4S1pD/MkdtN09feHJMVWR1/QklzS0VoSmctNzNf/MWpTVT0' }
    ];

    const productsContainer = document.getElementById('products');
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    function updateCart() {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-button" data-name="${item.name}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productElement.querySelector('button').addEventListener('click', () => {
            cart.push(product);
            updateCart();
        });

        productsContainer.appendChild(productElement);
    });

    cartContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-button')) {
            const productName = event.target.getAttribute('data-name');
            cart = cart.filter(item => item.name !== productName);
            updateCart();
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout - Total: $' + cartTotal.textContent.split('$')[1]);
        cart = [];
        updateCart();
    });
});
