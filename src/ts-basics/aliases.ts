// DRY - Don't Repeat Yourself
type Student = {
    readonly id: number, // readonly modifiers makes the id attribute immutable. Can't be changed.
    name?: string // ? marks the name attribute optional.

}

let student: Student = {
    id: 1,
    name: "Mutinda"
}

console.log("Student ID: " + student.id + " : " + student.name);
