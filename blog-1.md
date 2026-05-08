### Blog 1: 
Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.
---
`any` and `unknown` are the two escape ways that we use to handle the data that we don't know the type of. 
In typescript `any` is labeled as "type safety hole" because it disables the typescript's ability to check the type thus stops protecting us entirely. Therefore, it allows invalid operations where we can run into runtime errors. 
For e.g.: 
```tsx
let data:any =42;
data.upperCase(); // Here there is no error but runtime error happens.
```
With `unknown` in typescript we can solve this type of issues for unpredictable data. It works in same way like `any` but when we try to access something from it typescript will give an error. It restricts what we can do with it until we prove the type of value. 
For e.g.: 
```tsx
let value: unknown = "Hi, Rahid";
value.toUpperCase(); //Error we need to perform additional checks
```
Type narrowing is the process of refining unknown type variable into more specific type based on runtime checks. 
For e.g: 
```tsx
const value: unknown = "Hi, Rahid";
if(typeof value=== string){ // checks the type
    console.log(value.toUpperCase()); // now it doesn't return any error since we performed additional checks
}
```