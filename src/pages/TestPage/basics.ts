let username: string = "Oleg";

let age: number = 22;

let isLoggedIn: boolean = true;

const scores: number[] = [10, 20, 30];

const user: { id: number; name: string; email: string } = {
  id: 1,
  name: "Anna",
  email: "anna@example.com",
};

const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity;
}

let value: unknown = "hello";

value = 'world';

if(typeof value === 'string') {
  console.log(value.toUpperCase());
}

let data: any = 42;

data = "Hello";

data = true;