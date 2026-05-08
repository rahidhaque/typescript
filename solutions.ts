//problem 1
function filterEvenNumbers(numbers: number[]) {
  const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
  return evenNumbers;
}

const inputEven = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(inputEven));

//problem 2
function reverseString(str: string) {
  let reversed: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

const inputReverse = "typescript";
console.log(reverseString(inputReverse));

//problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber) {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
}

const input1 = "Hello";
const input2 = 42;

console.log(checkType(input1));
console.log(checkType(input2));

//problem 4
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));

//problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = <T extends Book>(book: T) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

//problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//problem 7
function getIntersection(arr1: number[], arr2: number[]) {
  const intersection: number[] = arr1.filter((num) => arr2.includes(num));
  return intersection;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getIntersection(array1, array2));

