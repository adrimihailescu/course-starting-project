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
    // private id: string;
    // private name: string;
   private employees: string[] = [];

    constructor(private id: string, public name: string){
        //this.id: id
        // this.name = n;
    }
//class method
    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`)
    }
//class method
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting');

// console.log(accounting)

accounting.addEmployee('Adriana');
accounting.addEmployee('Bobby');

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = {name: 'Dummy', describe: accounting.describe};

// accountingCopy.describe()