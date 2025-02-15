type Todo = {
  title: string;
  description: string;
  completed: boolean;
};
const Task: Todo = {
  title: "Clean room",
  description: "Clean my room",
  completed: false,
};

type OptionalTodo = {
  [P in keyof Todo]?: Todo[P];
};
const optionalTask: OptionalTodo = {
  title: "Clean room",
};

// console.log(Task);
// console.log(optionalTask);

function reverseArr<T>(arr: T[]): T[] {
  return arr.reverse();
}
console.log(reverseArr([1, 2, 3, 4, 5]));
