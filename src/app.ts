//Decorators

function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]){
                super();
                    console.log('Rendering template');
                    const hookEl = document.getElementById(hookId);
                    // const p = new originalConstructor()
                    if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}
        


// @Logger('LOGGING - PERSON')
@Logger('LOGGING..')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person1 {
    name= 'Adriana';

    constructor() {
        console.log('Creating person object..');
    }
}

const pers = new Person1();

console.log(pers)

//--

//property decorator
function Log(target: any, propertyName: string | Symbol) {
console.log('Property decorator!');
console.log(target, propertyName);
}

//accesor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
console.log('Accesor decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

//method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

//parameter decorator
function Log4(target: any, name: string | Symbol, position: number ) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title: string;
   private _price: number;
@Log2
   set price(val: number) {
    if(val > 0) {
        this._price = val;
    } else {
        throw new Error('Invalid price - should be positive!');
    }
   }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
@Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 * tax);
    }

}

//create an autobinder decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
    }

    class Printer {
        message= 'This works!';

        @Autobind
        showMessage(){
            console.log(this.message)
        }
    }

    const p = new Printer();

    const button = document.querySelector('button')!
    button.addEventListener('click', p.showMessage);
