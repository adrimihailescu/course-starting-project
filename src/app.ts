// const button = document.querySelector('button')!;

// function clickHandler(message: string) {
//     // let userName = 'Adriana';
//     console.log('Clicked!' + message)
// }

// if(button) {
//     button.addEventListener("click", clickHandler.bind(null, "'You're welcome!"))
// }
// const userName = 'Adriana';
// // userName = 'Bobby';
// let age = 36;

// age = 35;
    
// function addNumbers(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result
// }
// // console.log(result);


// //destructuring
// const hobbies = ['Hiking', 'Dancing']

// const [hobbie1, hobbie2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobbie1, hobbie2)


// const personNew = {
//     firstName: 'Adriana',
//     age: 36
// }

// const {firstName, age} = personNew;

class Department {
    name: string;

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department){
        console.log('Department: ' + this.name)
    }
}

const accounting = new Department('Accounting');

// console.log(accounting)
accounting.describe()

const accountingCopy = {name: 'Dummy', describe: accounting.describe};

accountingCopy.describe()