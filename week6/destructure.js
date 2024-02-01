// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Destructuring assignment for objects
  const { firstName, lastName, age, address: { city, country } } = person;
  
  // Using the extracted values
  console.log(firstName);  // Outputs: 'John'
  console.log(lastName);   // Outputs: 'Doe'
  console.log(age);        // Outputs: 30
  console.log(city);       // Outputs: 'New York'
  console.log(country);    // Outputs: 'USA'
  