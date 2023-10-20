// promitive: number, string, boolean
// More complex types: arrays, objects
//  function type, paramaters

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInsturctor: boolean;
isInsturctor = true;

// More complex

let hobbies: string[];
hobbies = ['hai', 'hello', 'world'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'rama',
  age: 21,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = 'React the complete guide';
