type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


//Union Types 
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    //runtime time check
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2 // adding the + means we force it to be a number
    } else {

       result = input1.toString() + input2.toString();
    }
    return result
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {

    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)


const combinedNames= combine('Adriana', 'Bobby', 'as-text')
console.log(combinedNames)