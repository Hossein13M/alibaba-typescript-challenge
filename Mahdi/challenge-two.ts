// Implement the built-in Pick<T, K> generic without using it.
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
  }

type CarMakeAndModel = MyPick<Car, 'make' | 'model'>;

const myCar: CarMakeAndModel = {
  make: 'Toyota',
  model: 'Camry',
};
