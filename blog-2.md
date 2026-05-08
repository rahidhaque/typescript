### Blog 2 
How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code **DRY** (Don't Repeat Yourself).
---
`Pick` and `Omit` helps to keep our code from any duplication by allowing us to create new types based on existing ones without having to rewrite the entire structure. For example, if we have a master interface `User` with properties like `id`, `name`, `email`, and `age`, we can use `Pick` to create a new type that only includes the `name` and `email` properties for a specific use case, such as a login form. This way, we avoid duplicating the entire `User` property.
---
Similarly, with `Omit`, we can create a new type that excludes certain properties from the master interface. For instance, if we want to create a type for user registration that doesn't include the `id` property, we can use `Omit` to exclude it from the `User` interface. 
---
This both approach keeps our code DRY because we are not repeating the structure of the `User` interface for different use cases.
For e.g.: 
```tsx
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserLogin = Pick<User, "name" | "email">;
type UserRegistration = Omit<User, "id">;
```