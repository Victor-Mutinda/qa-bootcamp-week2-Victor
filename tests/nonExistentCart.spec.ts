import { test, expect } from "@playwright/test";

test("Return 404 when requesting a cart that does not exist", async ({ request }) => {

let cartId: string | undefined;

    try {

// creating a cart ID through POST request
    const cartIdResponse = await request.post("https://api.practicesoftwaretesting.com/carts");

console.log(cartIdResponse.status()); // 201 

    expect(cartIdResponse.status()).toBe(201); // should return a 201 code if a cart ID has been created successfully

    // Extract the card ID
    const cardIdResponseBody = await cartIdResponse.json();
    expect(cardIdResponseBody).toHaveProperty('id');
    cartId = cardIdResponseBody.id;


    // pass the invalid cart ID by using logical NOT(!)
    const response = await request.get(`https://api.practicesoftwaretesting.com/carts/${!cartId}`);
    expect(response.status()).toBe(404);        
    } 
    finally {
        if (cartId) {
        const deleteCartResponse = await request.delete("https://api.practicesoftwaretesting.com/carts/" + cartId);

console.log(deleteCartResponse.status()) // 204
    expect(deleteCartResponse.status()).toBe(204);
    }
        
}

 
});