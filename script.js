// Initialize the cart from localStorage

function checkout() {
    // Simple checkout message
    alert("Thank you for your order! We'll prepare your goodies shortly.");
    // Clear cart after checkout
    cart = [];
    localStorage.removeItem('cart');
    displayCart();  // Update cart display
}

// Search functionality for the products page
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const productList = document.getElementById('product-list').getElementsByTagName('li');
    
    for (let i = 0; i < productList.length; i++) {
        const productName = productList[i].getElementsByTagName('span')[0].textContent.toLowerCase();
        if (productName.indexOf(searchTerm) !== -1) {
            productList[i].style.display = "";
        } else {
            productList[i].style.display = "none";
        }
    }
}

// Simple login functionality (mock login)
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('status').textContent = 'Welcome, ${username}! You are logged in.';
        window.location.href = "index.html"; // Redirect to Home Page
    } else {
        alert("Please enter a username.");
    }
});

// Display login status on pages
window.onload = function() {
    if (localStorage.getItem('username')) {
        const username = localStorage.getItem('username');
        const statusElement = document.getElementById('status');
        if (statusElement) {
            statusElement.textContent = 'Welcome back, ${username}!';
        }
    }

    // For cart page, display cart items
    if (document.getElementById('cart-list')) {
        displayCart();
    }
};

function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let productItems = document.getElementsByClassName('product-item');

    for (let i = 0; i < productItems.length; i++) {
        let product = productItems[i];
        if (product.innerText.toLowerCase().includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}

let cart = [];

function addToCart(id, name, price) {
    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if the product is already in the cart
    } else {
        // Add new product to the cart
        cart.push({ id, name, price, quantity: 1 });
    }

    // Update the cart display
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalAmount = document.getElementById('total-amount');
    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartHTML += '<li>${item.name} x ${item.quantity} - $${item.price * item.quantity}</li>';
        total += item.price * item.quantity;
    });

    cartList.innerHTML = cartHTML;
    totalAmount.textContent = 'Total: $${total.toFixed(2)}';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    window.location.href = 'checkout.html'; // Redirect to checkout page
}
const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
});
