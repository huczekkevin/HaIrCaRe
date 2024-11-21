const addToCartButton = document.getElementById("addToCart");

addToCartButton.addEventListener('click', function() {

  const productName = "Hajzselé";
  const productPrice = 6500; 

  let cart = JSON.parse(localStorage.getItem("cart")) || []; 

  const product = {
    name: productName,
    price: productPrice,
    quantity: 1 
  };

 
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");

});
