// type AddFn = (a: number, b: number) => number;
interface  AddFn {
    (a: number, b: number): number;
}

let addNum: AddFn;

addNum = (n1: number, n2: number) => {
    return n1 + n2
}



interface Named {
    readonly name: string;
}

interface Greatable extends Named{
//    readonly name: string;

    greet(phrase: string): void;
}



class Person implements Greatable {
    name: string;
    age= 36;

    constructor(n: string) {
        this.name = n;
        // this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greatable;

user1 = new Person('Adriana');
   
user1.greet('Hi there - I am');
console.log(user1)

