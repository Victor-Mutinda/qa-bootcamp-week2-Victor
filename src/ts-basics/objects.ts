let employee : {
    readonly id: number, // readonly modifiers makes the id attribute immutable. Can't be changed.
    name?: string // ? marks the name attribute optional.
    retire : (year : number) => void
}

employee = {
    id: 1,
    name : "Mutinda",
    retire : function(y) {
        console.log("Employee retired on: " + y);
    }
}

employee.name = "Annette";


console.log("Employee ID: " + employee.id + " : " + employee.name + " Will retire on: " + employee.retire(2027));
