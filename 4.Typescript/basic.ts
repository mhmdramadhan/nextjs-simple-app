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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'rama',
  age: 21,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference (union type)
let course: string | number = 'React the complete guide';

course = 1234;
