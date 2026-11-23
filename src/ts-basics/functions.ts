function calculateTax(salary: number, taxYear = 2025) : number {
    if (taxYear <= 2025){
        return (salary * 1.2);
    }
    return (salary * 1.3);
}

let gross = calculateTax(200000,2015);

console.log(gross);