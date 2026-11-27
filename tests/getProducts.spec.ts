import {test, expect} from "@playwright/test"

test("Get Request for products" , async({request}) => {
// Sending the GET request
    const response = await request.get("https://api.practicesoftwaretesting.com/products");

// checking the status code 
    expect(response.status()).toBe(200);
// Reading the response body
    const responseBody = await response.json();
//    console.log(responseBody); print out that reponsebody
// Expectation
    expect(responseBody.data[0]).toHaveProperty('name');

} )