# Questions:
1. What is the difference between **var**, **let**, and **const**?
2. What is the difference between **map()**, **forEach()**, and **filter()**?
3. What are **arrow functions** in ES6?
4. How does **destructuring assignment** work in ES6?
5. Explain **template literals** in ES6. How are they different from **string concatenation**?

# Answers:

## Answer to Question 1: 
The first difference between **var**, **let**, and **const** is let and const are the updated features in ES6, where var is back-dated. let and const offers way more usability than var. Here are some remarks:

1. `let` and `const` are block-scoped but `var` is globally scoped and function-scoped.
2. `let` can be reassigned but not redeclared in the same scope, `const` cannot be redeclared or reassigned in the same scope, but `var` can be redeclared and reassigned.
3. var, let and const are hoisted but `var` is initialized with undefined whereas `let` is not initialized and goes into "Temporal Dead Zone" and `const` must be initialized during declaration.

## Answer to Question 2:
the difference between **map()**, **forEach()**, and **filter()**:
1. **map()**: Creates a new array by performing some operation on each element of the array. It returns the operated values.
2. **forEach()**: Executes a function once for each element of the array. It returns `undefined`.
3. **filter()**: It filters an array with elements that pass the given condition and creates a new array.

## Answer to Question 3:
An **arrow function** is a shorter syntax to write a functions. In an **arrow function**, the keyword `function` is not used. They are very useful for callbacks. Here is an example of a normal function and an **arrow function**:

```JavaScript
// Normal function
function add2Numbers (a, b) {
    return a + b;
}

// Arrow function 
const add2Numbers = (a, b) => a + b;
```

## Answer to Question 4:
**Destructuring Assignment** is a way to extract values from arrays or objects and set them into distinct variables. It enhances the readability and usability of the code and makes it shorter and cleaner. Here is an example:

```JavaScript
const arr = [2, 3, 5, 7];
const [a, b, c] = arr;
// It means now a=2, b=3, c=5
```

## Answer to Question 5:
### Template Literals
One can write multi-line and dynamic strings using **template literals**. In **template literals**, backticks(`) are used instead of quotes('or"). Here is an example:

```JavaScript
const name = "Mridula";
const varsity = "Pabna University of Science and Technology";
const department = "CSE";

// template literals
const introduction = `My name is ${name}.
I am a student of ${department} department in ${varsity}`;
console.log(introduction);
```

### The Difference from **string concatenation**:
In string concatenation, strings are joined using plus(+) sign and lots of quotes are used. **String concatenation** can reduce readability and usability of code. Also, multi-line strings cannot be written in this way.

```JavaScript
const name = "Mridula";
const varsity = "Pabna University of Science and Technology";
const department = "CSE";

// string concatenation
console.log("My name is " + name + ".");
console.log("I am a student of " + department + " department in " + varsity);
```