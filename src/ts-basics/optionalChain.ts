type Customer = {
    birthdayMonth?: string 
};

function getCustomer(id : number) : Customer | null | undefined {
    return id === 0 ? null : {
        birthdayMonth : "January"
    };
}

let customer = getCustomer(0);

 // Below is the long way.
//if(customer !== null && customer !== undefined)
  //  console.log(customer.birthdayMonth);

// This is the short way using optional chaining. Optional property access operator method
console.log(customer?.birthdayMonth? "Customer birthday month is: " + customer.birthdayMonth : "Customer birthday month is not available");

// Optional element access operator method
//let customers = [ { birthdayMonth : "January" } ];
//console.log(customers?.[0]?.birthdayMonth? "Customer birthday month is: " + customers[0].birthdayMonth : "Customer birthday month is not available"); 




