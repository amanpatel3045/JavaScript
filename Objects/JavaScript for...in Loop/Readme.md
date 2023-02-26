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

## Adding New Properties
You can add new properties to an existing object by simply giving it a value.

Assume that the person object already exists - you can then give it new properties:

## Example
person.nationality = "English";

Deleting Properties
The delete keyword deletes a property from an object:


Example
```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
```
or delete person["age"];

Example
```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
```

The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
