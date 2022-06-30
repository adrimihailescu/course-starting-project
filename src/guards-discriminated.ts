//Intersection Types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Adriana',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable1 = string | number;
type Numeric = number | boolean;

//this will be the type that is common in Combinable1 & Numeric (number)
type Universal = Combinable1 & Numeric;


//Type Guards
function addNu(a: Combinable1, b: Combinable1) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    } 
}

printEmployeeInformation({name: 'Bobby', startDate: new Date()});

class Car {
    drive() {
console.log('Driving..')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck..')
            }

            loadCargo(amount: number) {
                console.log('Loading Cargp...' + amount)
            }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated Unions
interface Bird {
    type: 'brid';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'brid':
            speed = animal.flyingSpeed;
            break;
            case 'horse':
                speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({type: 'brid', flyingSpeed: 19})

// Type Casting

const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!'

//index types properties
interface ErrorContainer {
    // {email: 'Not a valid email', username: 'Must start with a character..'}
    // id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};

//optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Adriana',
    job: {title: 'CEO', description: 'My own company'}
};
console.log(fetchedUserData?.job?.title)

