export {}

// type Product = {
//     id: number;
//     name: string;
// }

// const a: number = 20;
// const b: number = 20;
// const name: string = " Le Trong Dat";
// const age: number = 20;
// const status: boolean = true;
// const info: object={};
// const stringArr: string[] = ["a", "b", "c"];
// const numberArr: number[] = [1,2 ,3 ,4];
// const objectArr: object[] = [{id: 1}, {id: 2}]

// function sum(numA: number, numB: number): number {
//     return numA + numB
// }
// sum(a,b);

type Product = {
    id: number, name: string
}


function show<T,U>(a: T, b: U): [T, U]{
     return [a,b];
}

show (10, 20);
show("le","Dat");
console.log(show);


