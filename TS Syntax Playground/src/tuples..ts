let person: [string, number, boolean];
person = ['John', 25, true];

console.log(person[0]); // Output: John
console.log(person[1]); // Output: 25
console.log(person[2]); // Output: true

function getUser(): [string, number] {
  return ['John', 25];
}

const user: [string, number] = getUser();
console.log(user[0]); // Output: John
console.log(user[1]); // Output: 25

function printPerson(person: [string, number, boolean]) {
  console.log(`Name: ${person[0]}, Age: ${person[1]}, Active: ${person[2]}`);
}

printPerson(['John', 25, true]); // Output: Name: John, Age: 25, Active: true
