const getLenth = (str: string) => {
  return str.length;
};
const result = getLenth("Hello World");
console.log(result);

const getLenth2 = <T>(str: T) => {
  return (str as string).length;
};
const result2 = getLenth2<string>("Hello World");
console.log(result2);

const getLenth4 = <T extends { length: number }>(str: T) => {
  return str.length;
};
const result4 = getLenth4<string>("Hello World....");
console.log(result4);
