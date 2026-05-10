let cartQuantity = 0;

const addToCartButtons = document.querySelectorAll('.addCart-js');
const cartNumber = document.querySelector('.cart-number-js');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productContainer = button.closest('.product');
        const quantitySelector = productContainer.querySelector('.select-quantity');
        const quantity = Number(quantitySelector.value);
        cartQuantity += quantity;
        cartNumber.innerText = cartQuantity;
    });
});