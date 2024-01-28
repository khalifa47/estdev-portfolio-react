# Portfolio Page

This is a portfolio page showcasing my skills, projects, and experience, built using React + TypeScript. The deployed version can be viewed [here](https://khalifa47.github.io/estdev-portfolio-react/). There is a bonus section at the end if you're one for the laughs.

## Libraries Used

- [React.js](https://react.dev)
- [styled-components](https://styled-components.com)
- [react-typed](https://www.npmjs.com/package/react-typed)
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component)

## Q&A Section

### 1. What is NPM?

NPM, short for Node Package Manager, is a package manager for JavaScript (specifically the Node.js runtime environment) that allows the developers to manage dependencies for their projects. Packages from a repository can be installed, shared, and accessed using NPM.

### 2. What is SPA?

SPA, short for Single Page Application, is a web application where the user interacts with one page that is dynamically rewritten as required rather than loading entire new pages from the server. In React, this is facilitated by the React Router.

### 3. What is the event loop?

The event loop is a JavaScript technique allowing asynchronous execution of operations. It continuously checks the call stack and the callback queue and moves the next task to be executed from the callback queue to the call stack when the call stack is empty.

### 4. What is the difference between export x and export default x? How do you import them differently?

`export x` is used to export expicitly named modules from a file. When importing the module, the exact name must be used and placed in curly braces, for example `import { x } from File`.
`export default x` is used to export a single module by default. When importing, the module can be imported using any name without curly braces, for example `import y from File`.

### 5. Why do you use className as a property in React and not class?

In JavaScript, `class` is a reserved keyword. Using it in React, being a JavaScript library, would result in conflicts hence `className` was devised to tackle this issue.

### 6. Why should you not write the following? What will happen?

```jsx
<button onClick={setCounter(counter + 1)}> +1 </button>
```

This code will cause the `onClick` handler to be immediately invoked when the component renders, leading to an infinite loop of state updates. Instead, you should pass an anonymous arrow function to `onClick` that updates the state as follows.

```jsx
<button onClick={() => setCounter(counter + 1)}> +1 </button>
```

### 7. What is object deconstruction and how is it connected to React components (example)?

Object deconstruction is a feature in JavaScript allowing you to extract properties from objects and assign them to variables using the same name. In React components, this is commonly used to extract props as shown in the example below.

```jsx
// Component Definition
const Intro = ({ name, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

// ...

// Component Usage
<Intro name="Khalifa" description="Sports Enthusiast" />;
```

### 8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

This is possible with JSX which is a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript files. JSX code is tranformed into regular JavaScript under the hood during building. In React this is achieved using the `React.createElement()` function. An example of this code tranformation is shown below.

```js
const element = <p className="small">Hello</p>; // before
```

```js
const element = React.createElement("p", { className: "small" }, "Hello"); // after
```

### 9. What is async/await? Bring an example

Async/await is a way of writing asynchronous code in JavaScript. `async` is used to define an asynchronous function. When the function is called `await` is used to to pause the execution of the function until the promise returned by the asynchronous operation is resolved. This allows the code to wait for the asynchronous operation to complete and then continue with the execution. An example is shown below.

```jsx
const fetchData = async () => {
  try {
    const response = await fetch("https://api.sampleapis.com"); // wait for fetch to complete before proceeding
    const data = await response.json(); // wait for json before returning data
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const data = await fetchData();

// more code
```

### 10. What is a Promise? Bring an example

A Promise is an object representing the eventual state of an asynchronous operation (whether successful or failed). A promise is either resolved with a value when the asynchronous operation completes successfully or rejected with a reason when it fails. An example similar to the one above is shown below.

```jsx
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.sampleapis.com")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const data = fetchData()
  .then((data) => data) // resolve with the data
  .catch((error) => {
    console.error("Error: ", error); // or reject with error message then return null
    return null;
  });

// more code
```
