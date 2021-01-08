console.log('Hello from ts');
/*
$ node_modules/typescript/bin/tsc types.ts

The following runs the TypeScript compiler in watch mode:
$ node_modules/typescript/bin/tsc types.ts -w
*/

/* The simple data types */
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello World' // or:  'Hello' + ' ' + 'World' ; 'Hello'.slice(0, 3)
myNum = 22 // or: 5 ; 5 + 5 ; 5.5 ; 0xf00d
myBool = true
myVar = '5' // or: 'Hello' ; true

console.log('The simple data types:');
console.log(myVar);

/* Arrays */
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
/* Another way to define arrays: */
// let strArr: Array<string>;
// let numArr: Array<number>;
// let boolArr: Array<boolean>;

strArr = ['Hello', 'World'];
numArr = [1, 2, 3];
boolArr = [true, false, true]

console.log('Arrays:');
console.log(strArr);
console.log(numArr);
console.log(boolArr);
