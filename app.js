var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
// console.log(calculate(num1, 3));
function getTotal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    });
}
var cred = {
    name: "Beast",
    age: 1
};
function login(userData) {
    return userData;
}
var transaction1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455
};
var transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456
};
var bankAccount = {
    accountNumber: 123,
    accountHolder: "Joe",
    balance: 69,
    isActive: true,
    transactions: [transaction1, transaction2]
};
var book = {
    name: "Atomic Habits",
    price: 1200,
    fileSize: 300,
    format: "pdf",
    duration: 2
};
var Car = {
    category: "LMV",
    wheels: 4,
    isElectric: true
};
// Narrowing
function printID(id) {
    typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id);
}
// printID(1);
// printID("peter");
function getFirstThree(x) {
    return x.slice(0, 3);
}
// console.log(getFirstThree("Lambo"));
// console.log(getFirstThree([1, 2, 3, 4, 5]));
// Generics
function logString(args) {
    console.log(args);
    return args;
}
// logString("log string");
function logNumber(args) {
    console.log(args);
    return args;
}
// logNumber(1);
function logArray(args) {
    console.log(args);
    return args;
}
// logArray([1, 2, 3]);
function logAnything(args) {
    console.log(args);
    return args;
}
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 30 }, { age: 40 }, { age: 10 }];
var players = [
    { name: "John", age: 30 },
    { name: "Jane", age: 35 },
    { name: "Joe", age: 60 },
];
// Assertion
// const person = getOldest(players) as Player;
// console.log(person.name);
function getOldest1(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var person1 = getOldest1(players);
var person2 = getOldest1(people);
console.log(person1);
console.log(person2);
