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
// We cannot merge and extend Types
// Interface is used for objects
