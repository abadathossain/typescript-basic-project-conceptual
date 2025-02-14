{
  //
  type Person = {
    name: string;
    age: number;
    location: string;
  };

  // type personKeys = keyof Person;

  const keyofFunc = <P, T extends keyof P>(obj: P, key: T) => {
    return obj[key];
  };

  const user: Person = { name: "John", age: 30, location: "USA" };

  const result = keyofFunc(user, "name");
  const result1 = keyofFunc(user, "age");
  console.log(result);
  console.log(result1);

  //
}
