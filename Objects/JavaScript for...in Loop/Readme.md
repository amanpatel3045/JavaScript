The JavaScript for...in statement loops through the properties of an object.

Syntax
```
for (let variable in object) {
  // code to be executed
}
```

The block of code inside of the for...in loop will be executed once for each property.

Looping through the properties of an object:

# Example

```
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}
```
