// let romanConverter = document.getElementById("romanConverter");
// romanConverter.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const numberInput = document.getElementById('numberInput').value;
//     const num = Number(numberInput);
//     if (isNaN(num) || num < 0 || num > 100000) {
//         document.getElementById('result').textContent = 'Please enter a valid number between 0 and 100000.';
//         return;
//     }
    
//     // Convert the number to Roman numeral
//     const romanNumeral = convertToRoman(num);
    
//     // Display the result
//     document.getElementById('result').textContent = 'Roman Numeral: ' + romanNumeral;
// });

function romanConverter(num) {
    if (num < 1 || num > 100000) {
        throw new Error('Number out of range. Please enter a number between 1 and 100000.');
		
    }

    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to the console
// Uncomment the following line to test
// console.log(convertToRoman(36));
module.exports = romanConverter
