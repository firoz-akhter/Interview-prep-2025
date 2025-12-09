// let a:string = "hello";
// let nambo:number = 342;
// let check:boolean;
export {};
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
// class Player {
//     public readonly id:string;
//     constructor(
//         private height:number,
//         public weight:number, 
//         protected power: number
//     ) {
//         this.id = String(Math.random()*100)
//     } 
//     // getHeight = () => this.height;
//     get getMyHeight():number {
//         return this.height;
//     }
//     set changeHeight(height:number) {
//         this.height = height;
//     }
// }
// const abhi = new Player(23, 89, 20);
// console.log(abhi.getMyHeight)
// abhi.changeHeight = 38
// console.log(abhi.getMyHeight)
// console.log(abhi.weight)
// class Player2 extends Player {
//     special:boolean;
//     constructor(height:number, weight:number, power:number, special:boolean) {
//         super(height, weight, power)
//         this.special = special;
//     }
//     getMyPower = () => this.power;
// }
// const abhi = new Player2(100, 150, 23, true);
// console.log("weight", abhi.weight);
// console.log("power", abhi.getMyPower() );
// class ka bhi type pehle se bana ke rakh skte hai
// interface ProductType {
//     name:string,
//     price:number,
//     stock:number,
//     getId:() => string,
//     offer?: boolean,
// }
// class Product implements ProductType {
//     private readonly id = String(Math.random()*1000)
//     constructor(
//         public name: string,
//         public price:number,
//         public stock:number
//     ) {}
//     getId = () => this.id;
// }
// const product1 = new Product("Mac mini", 2000, 20);
// const btn = document.getElementById("btn") as HTMLButtonElement;
// const img = document.getElementById("myimg") as HTMLImageElement;
// const form = document.getElementById("myform") as 
// HTMLFormElement;
// const myinput = document.querySelector("form > input") as
// HTMLInputElement;
// form.onsubmit = (e:SubmitEvent) => {
//     e.preventDefault()
//     console.log(myinput.value);
// }
// Generics
// type Person = {
//     name: string,
//     age: number,
// }
// const myFunc = <T>(n:T):T => {
//     return n;
// }
// const person1: Person = {
//     name: "abhi",
//     age: 25,
// }
// const ans = myFunc<Person>(person1);
// type Person = {
//     name: string,
//     age: number,
// }
// const person1:Person = {
//     name: "John",
//     age: 98,
// }
// type Person2 = {
//     name: string,
//     age: number,
//     email: string,
// }
// const person2:Person2 = {
//     name: "Doe",
//     age: 98,
//     email: "firoz@gmail.com",
// }
// const func = <T, U extends T>(n:T, o:U):{n:T, o:U} => {
//     return {n, o};
// }
// const ans = func<Person, Person2>(person1, person2)
//# sourceMappingURL=index.js.map