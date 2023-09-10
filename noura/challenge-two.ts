// Implement the built-in Pick<T, K> generic without using it.

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  
  interface Person {
    name: string;
    age: number;
    address: string;
  }
  
  type PersonNameAndAge = MyPick<Person, 'name' | 'age'>;