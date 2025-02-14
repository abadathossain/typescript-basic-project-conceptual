const num = [1, 2, 3, 4, 5];
const [first, second, ...rest] = num;
// console.log(first);
// console.log(second);
// console.log(rest);

// spread operator
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// console.log(arr3);

interface IPerson<T, Q> {
  name: string;
  age: Q;
  city: string;
  id: T;
}
const person: IPerson<number, string> = {
  name: "John",
  age: "25",
  city: "New York",
  id: 1,
};

// console.log(person);

const showMessage = <T, Q>(message: T, personINfo: Q) => {
  return { message, personINfo };
};
console.log(
  showMessage<string, IPerson<number, string>>("Hello World", {
    name: "John",
    age: "25",
    city: "New York",
    id: 1,
  })
);
// console.log(showMessage<number>(100));

const add = <P, Q, T>(a: P, b: Q, personINfo: T) => {
  return { a, b, personINfo };
};
console.log(
  add<string, number, IPerson<number, string>>("1", 5, {
    name: "John",
    age: "25",
    city: "New York",
    id: 1,
  })
);
