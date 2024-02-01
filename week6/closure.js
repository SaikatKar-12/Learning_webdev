function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
      // Accessing the outer variable
      console.log(outerVariable);
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Creating a closure by calling outerFunction
  const closure = outerFunction();
  
  // Calling the closure
  closure(); // Outputs: "I am from the outer function"
  