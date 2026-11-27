import { test, expect } from "@playwright/test";

test("C4 Add to a cart", async ({ request }) => {
    const baseUrl = "https://api.practicesoftwaretesting.com";
    let cartId: string | undefined;

    try {
        // Get a valid product ID
        const productResponse = await request.get(`${baseUrl}/products`);

//console.log(productResponse.status()); // 200

        expect(productResponse.status()).toBe(200);
// Extract product Id  of the first product
    // convert the response to a JSON object
        const productsBody = await productResponse.json();
        // Getting product ID for the first product in the product list in the product Response body
        const productId = productsBody.data[0].id;

        // Create a new cart
        const createCartResponse = await request.post(`${baseUrl}/carts`);
//console.log(createCartResponse.status()); // 201
        expect(createCartResponse.status()).toBe(201); // should return a 201 code if a cart ID has been created successfully

// Extract the card ID 
        const cartBody = await createCartResponse.json();
        expect(cartBody).toHaveProperty("id");
        cartId = cartBody.id;

        // Add the product to the cart
        const addProductResponse = await request.post(
            `${baseUrl}/carts/${cartId}`,
            {
                data: {
                    product_id: productId,
                    quantity: 2
                }
            }
        );

//console.log(addProductResponse.status()); // 200
        expect(addProductResponse.status()).toBe(200);

// Retrieve the cart and verify its contents
        const getCartResponse = await request.get(
            `${baseUrl}/carts/${cartId}`
        );
//console.log(getCartResponse.status()); // 200
        expect(getCartResponse.status()).toBe(200);

        const retrievedCart = await getCartResponse.json();

       expect(retrievedCart.cart_items).toEqual(
    expect.arrayContaining([
        expect.objectContaining({
            product_id: productId,
            quantity: 2
        })
    ])
);

    } finally {
        // Delete the cart even if an assertion fails
        if (cartId) {
            const deleteCartResponse = await request.delete(
                `${baseUrl}/carts/${cartId}`
            );
//console.log(deleteCartResponse.status()); //204
            expect(deleteCartResponse.status()).toBe(204);
        }
    }
});
