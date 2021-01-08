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

/* Tuples (tuple = an array with a defined number of elements */
let strNumTuple: [string, number];

strNumTuple = ['Hello', 1];
// strNumTuple = ['Hello', '1']; // bad
// strNumTuple = [1234567, 1]; // bad
// strNumTuple = ['Hello', 1, 2, 3]; // OK according to the tutorial, but actually seems to be bad as of 2021/01/08

console.log('Tuples:');
console.log(strNumTuple);

/* void, undefined, and null */
let myVoid: void;
let myNull: null;
let myUndefined: undefined;

myVoid = null;
// myVoid = undefined; // also OK
// myVoid = 1; // bad

myNull = null;
// myNull = undefined; // also OK
// myNull = 1; // bad

myUndefined = null;
// myUndefined = undefined; // also OK
// myUndefined = 1; // bad

console.log('void, undefined, and null:');
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);