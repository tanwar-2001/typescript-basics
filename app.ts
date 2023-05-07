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

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}
// console.log(getFirstThree("Lambo"));
// console.log(getFirstThree([1, 2, 3, 4, 5]));

// Generics
function logString(args: string) {
  console.log(args);
  return args;
}
// logString("log string");

function logNumber(args: number) {
  console.log(args);
  return args;
}
// logNumber(1);

function logArray(args: any) {
  console.log(args);
  return args;
}
// logArray([1, 2, 3]);

function logAnything<T>(args: T): T {
  console.log(args);
  return args;
}

// logAnything([4, 3]);

interface HasAge {
  age: number;
}

function getOldest(people: HasAge[]): HasAge {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

// console.log(getOldest(people).age);

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 60 },
];

// Assertion
// const person = getOldest(players) as Player;
// console.log(person.name);

function getOldest1<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const person1 = getOldest1(players);
const person2 = getOldest1(people);
// console.log(person1);
// console.log(person2);

interface IPost {
  title: string;
  id: number;
  discription: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

const fetchUsersData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

(async () => {
  // const posts = fetchPostData("/posts");
  // const users = fetchUsersData("/users");
  // const users = fetchData<IUser>("/users");
  // const posts = fetchData<IPost>("/posts");
})();

interface ICredential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

const signin = (cerdentials: ICredential) => {
  console.log(cerdentials);
  return true;
};

const user: ICredential = {
  username: "Peter",
  password: "secret",
  isAdmin: true,
};

// signin(user);

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean;
}

const auth: IAuth = {
  username: "peter",
  password: "secret",
  login(username, password) {
    return true;
  },
};
