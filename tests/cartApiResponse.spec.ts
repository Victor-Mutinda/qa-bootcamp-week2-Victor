import {test,expect} from "@playwright/test"


test("Check response after Creating a cart and adding product" , async({request}) => {

let cartId: string | undefined;

try {
    // Getting Products
    const productResponse = await request.get("https://api.practicesoftwaretesting.com/products");

console.log(productResponse.status()); // 200

    expect (productResponse.status()).toBe(200); // Shows that the get request was successful.

// Extract product Id  of the first product
    // convert the response to a JSON object
    const productsResponseBody = await productResponse.json();
    // Getting product ID for the first product in the product list in the product Response body
    const product1 = productsResponseBody.data[0].id;


// creating a cart ID through POST request
    const cartIdResponse = await request.post("https://api.practicesoftwaretesting.com/carts");
    
console.log(cartIdResponse.status()); // 201 

    expect(cartIdResponse.status()).toBe(201); // should return a 201 code if a cart ID has been created successfully
// Extract the card ID

    const cardIdResponseBody = await cartIdResponse.json();
    expect(cardIdResponseBody).toHaveProperty('id');
    cartId = cardIdResponseBody.id;
// Adding the product to the cart

    const addProductResponse = await request.post(
        "https://api.practicesoftwaretesting.com/carts/" + cartId,
        {
            data : {
                "product_id" : product1,
                "quantity" : 2

            }
        }
    );
console.log(addProductResponse.status()); // 200
    expect(addProductResponse.status()).toBe(200); // shows that you have added a product to the cart.
// Confirms the product has been added to cart by the below expectation
    const addProductResponseBody = await addProductResponse.json();
    expect(addProductResponseBody).toHaveProperty('result');
    expect(addProductResponseBody.result).toContain('item added or updated');

    
} finally {
    
    if (cartId) {
        const deleteCartResponse = await request.delete("https://api.practicesoftwaretesting.com/carts/" + cartId);

console.log(deleteCartResponse.status()) // 204
    expect(deleteCartResponse.status()).toBe(204);
    }

}
});


// After confirming that product has been added. Delete that cart

    

