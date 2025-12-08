// let a:string = "hello";
// let nambo:number = 342;
// let check:boolean;



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

interface Obj {
    height: number,
    weight: number,
    fair?: boolean,
}

type funcType = (n:number, m:number) => void;

interface NewObj extends Obj {
    scolar: boolean,
    func?: funcType
}

const gigi:NewObj = {
    height: 3434,
    weight: 23,
    scolar: true,
}

const kendal:NewObj = {
    height: 23,
    weight: 98,
    scolar: false,
    func: (n, m) => {
        console.log(n*m);
    }
}

const obj:Obj = {
    height: 234,
    weight: 140,
    fair: false,
}


const obj2:Obj = {
    height: 32,
    weight: 132
}
