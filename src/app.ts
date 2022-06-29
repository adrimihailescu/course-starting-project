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
   protected employees: string[] = [];

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

//inherited class/subclass
class ITDepartment extends Department {
    admins: string[]
constructor(id: string,  admins: string[]) {
    super(id, 'IT');
    this.admins= admins;
}
}

class AccountingDepartment extends Department {
    constructor(id: string,  private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
       if (name === 'Adriana') {
        return;
       }
       this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1', ['Adriana']);

// console.log(accounting)

it.addEmployee('Adriana');
it.addEmployee('Bobby');

it.describe()
it.name = 'NEW NAME';
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong..')

accounting.addEmployee('Adriana');
accounting.addEmployee('Bobby')

accounting.printReports()
accounting.printEmployeeInformation()

// const accountingCopy = {name: 'Dummy', describe: accounting.describe};

// accountingCopy.describe()