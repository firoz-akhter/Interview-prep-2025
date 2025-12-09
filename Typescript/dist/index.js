"use strict";
// let a:string = "hello";
// let nambo:number = 342;
// let check:boolean;
Object.defineProperty(exports, "__esModule", { value: true });
// let surname:string | number ;
// surname= 234
// const myFunc= (n:number, m:number):number => {
//     console.log(n * m);
//     return (n*m);
// }
// type aliasis
// type UserName = string | number;
// let a:UserName = "weroi sdf";
// const arr:number[] = [12, 13, 14, 15, 4578];
// const arr2:string[] = ["firoz", "hello", "Jennifer", "Aisha"]
// const arr3:Array<number> = [1, 2,3 ,4]
// // let's make tupple
// const arr4: [number, number] = [234.2, 343]
// const arrString:Array<string> = ["sdfl", "weroi", "hello"];
// ----------------------------------------
// object in typescript
// interface Obj {
//     height: number,
//     weight: number,
//     fair?: boolean,
// }
// type funcType = (n:number, m:number) => void;
// interface NewObj extends Obj {
//     scolar: boolean,
//     func?: funcType
// }
// const gigi:NewObj = {
//     height: 3434,
//     weight: 23,
//     scolar: true,
// }
// const kendal:NewObj = {
//     height: 23,
//     weight: 98,
//     scolar: false,
//     func: (n, m) => {
//         console.log(n*m);
//     }
// }
// const obj:Obj = {
//     height: 234,
//     weight: 140,
//     fair: false,
// }
// const obj2:Obj = {
//     height: 32,
//     weight: 132
// }
// --------------------------------------------
// functype
// type FuncType = (n:number, m:number, l?:number) => number;
// const myFunc:FuncType = (n, m, l) => {
//     if(l === undefined) return n*m;
//     return n*m * l;
// }
// myFunc(2, 4, 3);
// myFunc(2, 8); 
// type funcType = (...m:number[]) => number[];
// const whalefunc:funcType = (...m) => {
//     return m
// }
// whalefunc(1, 2, 3, 4, 5, 6, 98);
/// --------------------------
// func with obj
// type productType = {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
//     readonly id: string,
// }
// type GetDataType = (product: productType) => void;
// const getData:GetDataType = (product) => {
//     product.name = "new name",
//     console.log(product);
// }
// const productOne:productType = {
//     name: "Mac-mini",
//     stock: 46,
//     price: 99999,
//     photo: "sampleurl.com", 
//     id: "J234oksdf"
// }
// getData(productOne); 
// never type
// const errorHandler = ():never => {
//     throw new Error();
// }
// type themeMode = "light" | "dark";
// const mode:themeMode = "dark"
// classes in typescript
// syntax is same as interface
class Player {
    height;
    weight;
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    myHeight = () => {
        return this.height;
    };
}
const abhi = new Player(100, 200);
console.log(abhi.myHeight());
//# sourceMappingURL=index.js.map