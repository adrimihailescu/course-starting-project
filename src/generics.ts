// //Array type
// const names : Array<string> = []; //string[]

// //Promise type
// const promise:  Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB); // return the intersection of the two types
}

// console.log(merge({name: 'Adriana'}, {age: 36}));
const mergedObj = merge({name: 'Adriana', hobbies: ['Gaming']}, {age: 36});
console.log(mergedObj.age)


interface Lengthy {
    length: number;
}
function countAndDescription<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescription('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
};

extractAndConvert({name: 'Adriana'}, 'name');


//generic class
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Adriana');
textStorage.addItem('Bobby');
textStorage.removeItem('Adriana');
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Adriana'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Bobby'});

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems())

//generic utility types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCouseGoal (
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}


    

