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

abstract class Department {
    static fiscalYear = 2022;
    // private id: string;
    // private name: string;
   protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        //this.id: id
        // this.name = n;
    }

   static createEmployee(name: string) {
    return {name: name}
   }
//class method
   abstract describe(this: Department): void;
        // console.log(`Department (${this.id}): ${this.name}`)
    
//class method
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//inherited class/subclass
class ITDepartment extends Department {
    admins: string[]
constructor(id: string,  admins: string[]) {
    super(id, 'IT');
    this.admins= admins;
}

describe() {
    console.log('IT Department - ID: ' + this.id)
}
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment; // a static property which is accesible only from inside the class


    //getter method
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No report found');
    }

    //setter 
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value)
    }
   private constructor(id: string,  private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
       if (name === 'Adriana') {
        return;
       }
       this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Adriana');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Adriana']);

// console.log(accounting)

it.addEmployee('Adriana');
it.addEmployee('Bobby');

it.describe()
it.name = 'NEW NAME';
it.printEmployeeInformation()

console.log(it)

// const accounting = new AccountingDepartment('d2', []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2)


accounting.mostRecentReport = 'Year End report';
accounting.addReport('Something went wrong..');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Adriana');
accounting.addEmployee('Bobby')

// accounting.printReports()
// accounting.printEmployeeInformation()
accounting.describe()

// const accountingCopy = {name: 'Dummy', describe: accounting.describe};

// accountingCopy.describe()