// FooBar function that processes numbers from 1 to n
// Returns an array with the following rules:
// - If number is divisible by both 3 and 5: 'FooBar'
// - If number is divisible by 3: 'Foo'
// - If number is divisible by 5: 'Bar'
// - Otherwise: the number itself
const foobar = (n = 100) => {
  // Initialize results array to store output
  const results = [];
  
  // Loop through numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Check if divisible by both 3 and 5 (must be checked first)
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FooBar');
    } 
    // Check if divisible by 3
    else if (i % 3 === 0) {
      results.push('Foo');
    } 
    // Check if divisible by 5
    else if (i % 5 === 0) {
      results.push('Bar');
    } 
    // Not divisible by 3 or 5
    else {
      results.push(i);
    }
  }
  
  // Return the complete results array
  return results;
};

// Execute foobar with n = 15 and display results
const result = foobar(15);
console.log(result.join(', '));