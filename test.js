// test from euro to dollars
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const {fromEuroToDollar} = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
// Test for fromDollarToYen
test("One dollar should be 146.26 yen", function() {
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07);
    expect(yen).toBe(expected);
});
test ("One yen should be 0.00556 pounds", function(){
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(1);
    const expected = 1 * (0.87 /156.5);
    expect(pound).toBe(expected);
})
