test("One euro should be 1.04 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(4)).toBe(4.16);
   
})

test("Conversion from USD to JPY (1 USD = 154.26 JPY)", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1542.6);
  
})

test("Conversion from JPY to GBP (1 JPY = 0.0052 GBP)", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(5.2);
    
})