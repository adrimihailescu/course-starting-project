interface Named {
    readonly name: string;
}

interface Greatable extends Named{
//    readonly name: string;

    greet(phrase: string): void;
}



class Person implements Greatable {
    name: string;
    age: number;

    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greatable;

user1 = new Person('Adriana', 36);
   
user1.greet('Hi there - I am');
console.log(user1)

