// Implement the built-in Pick<T, K> generic without using it.
type nPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  
  interface Human {
    name: string;
    age: number;
    address: string;
  }
  
  type Total = nPick<Human, "name" | "age">;