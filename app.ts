let num1: number = 1;

function calculate(num1: number, num2: number) {
  return num1 + num2;
}
// console.log(calculate(num1, 3));

function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, item) => {
    return acc + item;
  });
}
// console.log(getTotal([1, 2, 3]));

// Type Alias
type User = {
  name: string;
  age: number;
  address?: string;
};

const cred = {
  name: "Beast",
  age: 1,
};

function login(userData: User): User {
  return userData;
}
// console.log(login(cred));

// Interfaces
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}
const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 455,
};
const transaction2: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 456,
};
const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "Joe",
  balance: 69,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// Interfaces Extend
interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}
interface AudioBook extends Ebook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration: number;
}

const book: AudioBook = {
  name: "Atomic Habits",
  price: 1200,
  fileSize: 300,
  format: "pdf",
  duration: 2,
};

// Interfaces Merge
interface Vehicle {
  category: string;
  wheels: number;
}
interface Vehicle {
  isElectric: boolean;
}

const Car: Vehicle = {
  category: "LMV",
  wheels: 4,
  isElectric: true,
};

// We cannot merge and extend Types
// Interface is used for objects

// Unions
type ID = number | string;

// Narrowing
function printID(id: ID) {
  typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id);
}
// printID(1);
// printID("peter");
