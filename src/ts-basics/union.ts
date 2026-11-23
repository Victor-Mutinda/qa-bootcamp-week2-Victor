function kgsTograms( weight : number | string) : number {
    // Narrowing technique is used to check the type of the weight parameter.
    if (typeof weight === 'number'){
        return weight * 1000;
    }
    else{
        return parseInt(weight) * 1000;
    }

}
console.log(kgsTograms(10));
console.log(kgsTograms('10kg'));
