// Esempio di dati dei prodotti
const products = [
    { id: 1, name: "Prodotto 1", price: 10.99 },
    { id: 2, name: "Prodotto 2", price: 19.99 },
    { id: 3, name: "Prodotto 3", price: 5.99 },
    { id: 4, name: "Prodotto 4", price: 14.99 },
    { id: 5, name: "Prodotto 5", price: 10.99 }
];

$(document).ready(function() {
    // Carica dinamicamente i prodotti
    const productList = $("#product-list");
    products.forEach(product => {
        const productCard = $("<div>").addClass("card mb-3");
        const cardBody = $("<div>").addClass("card-body");
        const productName = $("<h5>").addClass("card-title").text(product.name);
        const productPrice = $("<p>").addClass("card-text").text(`${product.price} €`);
        const addToCartBtn = $("<button>")
            .addClass("btn btn-primary add-to-cart")
            .attr("data-id", product.id)
            .text("Aggiungi al Carrello");

        cardBody.append(productName, productPrice, addToCartBtn);
        productCard.append(cardBody);
        productList.append(productCard);
    });

    // Gestione del carrello
    const cart = [];
    const cartList = $("#cart");

    productList.on("click", ".add-to-cart", function() {
        const productId = $(this).data("id");
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            cartList.append(`<li>${product.name} - ${product.price} €</li>`);
        }
    });

    // Gestione dell'acquisto
    const purchaseForm = $("#payment-form");
    purchaseForm.on("submit", function(e) {
        e.preventDefault();
        
        // Verifica dei campi del modulo di pagamento e di consegna
        const cardholderName = $("#cardholder-name").val();
        const cardNumber = $("#card-number").val();
        const cardExpiry = $("#card-expiry").val();
        const cardCvc = $("#card-cvc").val();
        const deliveryName = $("#delivery-name").val();
        const deliveryCountry = $("#delivery-country").val();
        const deliveryCity = $("#delivery-city").val();
        const deliveryAddress = $("#delivery-address").val();
        const deliveryPhone = $("#delivery-phone").val();

        if (!cardholderName || !cardNumber || !cardExpiry || !cardCvc ||
            !deliveryName || !deliveryCountry || !deliveryCity || !deliveryAddress || !deliveryPhone) {
            alert("Completa tutti i campi del modulo.");
        } else {
            // Simula un acquisto avvenuto
            $("#purchase-message").html("Acquisto avvenuto!");
        }
    });
});
