// DOM variables
const result = document.getElementById('resultOutput');
const digits = document.getElementById('digitsInput');
const num = document.getElementById('numberInput');
const upperCase = document.getElementById('uppercaseInput');
const lowerCase = document.getElementById('lowercaseInput');
const symbol = document.getElementById('symbolInput');

// Variables
let chosenOptionsArr = [];
const numArr = '0123456789';
const upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerArr = 'abcdefghijklmnopqrstuvwxyz';
const symbolArr = '~!@#$%^&*()_+=-,./;[]|{}":?><';


// Start with these

    // Showing the number of digits
document.getElementById('showNumOfDigits').innerHTML = digits.value;



// Showing instant result (not been used)
result.addEventListener("click", ()=>{

})


// Showing the number of digits when value is changed

    // digits.addEventListener("focus", ()=>{
    //     document.getElementById('showNumOfDigits').innerHTML = digits.value;
    // })

    // New method: "oninput" attribute
function showVal(value){
    document.getElementById('showNumOfDigits').innerHTML = value;
}


// Check which options have been chosen, add id into "chosenOptionsArr"
function chosenOptions(boolean, id){
    if(boolean){
        chosenOptionsArr.push(id);
    }else{
        chosenOptionsArr = chosenOptionsArr.filter((option)=>{
            return option != id;
        })
    }
}

// Generate and output the result when generate button is clicked
function generatePW(){
    resultText = "";
    let index = 0;

    for(i=0; i<parseInt(digits.value); i++){// digits.value define the amount of letters in PW
        index = Math.floor(Math.random() * chosenOptionsArr.length);// Choose a random option which are chosen

        // Add a random letter in chosen option's array to result string
        switch(chosenOptionsArr[index]){
            case 'numberInput':
                resultText += numArr[Math.floor(Math.random() * numArr.length)];
                break;
            case 'uppercaseInput':
                resultText += upperArr[Math.floor(Math.random() * upperArr.length)];
                break;
            case 'lowercaseInput':
                resultText += lowerArr[Math.floor(Math.random() * lowerArr.length)];
                break;
            case 'symbolInput':
                resultText += symbolArr[Math.floor(Math.random() * symbolArr.length)];
                break;
            default:
                resultText = 'Please choose at least one option.'// If there's no any option been chosen
        }

    }

    result.value = resultText;// Output result string to result's input element
}



// // console.log(upperCase.value)
// function test(value, id){
//     // console.log(value + id);
//     if(value){
//         console.log('good')
//     }else{
//         console.log('not good')
//     }
// }