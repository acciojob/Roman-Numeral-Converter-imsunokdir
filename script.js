document.getElementById("romanConverter").addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the value from the input field
    const numberInput = document.getElementById('numberInput').value;
    
    // Convert the input to a number
    const num = Number(numberInput);
    
    // Validate if the number is within the acceptable range
    if (isNaN(num) || num < 0 || num > 100000) {
        document.getElementById('result').textContent = 'Please enter a valid number between 0 and 100000.';
        return;
    }
    
    // Convert the number to Roman numeral
    const romanNumeral = convertToRoman(num);
    
    // Display the result
    document.getElementById('result').textContent = 'Roman Numeral: ' + romanNumeral;
});

function convertToRoman(num) {
    // Define the Roman numeral symbols and their values
    const obj = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';

    // Iterate over the symbols and values
    for (const [roman, value] of obj) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to the console
// Uncomment the following line to test
// console.log(convertToRoman(36));
