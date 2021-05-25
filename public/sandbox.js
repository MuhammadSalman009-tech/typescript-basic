"use strict";
//Lec#02
// const ITfiers="ITfiers";
// console.log(ITfiers);
// const inputs=document.querySelectorAll("input");
// inputs.forEach(input=>{
//     console.log(input);
// })
//Lec#03
// let ITfiers="ITfiers";
// const circumference=(diameter:number)=>{
//     return diameter*Math.PI;
// }
// console.log(circumference(3));
//Lec#04
//Arrays
// let names=["Ejaz","Hassam","Hifz","Ahtisham","Salman"];
// names.push("something")
// names.push(10)
// names[0]="anything";
// names[0]=19;
//Objects
// let person={
//     name:"salman",
//     age:22
// }
// person.name="Ejaz";
// person.age="Ejaz";
// person={}
// person=[];
// person={
//     name:"sumra",
//     age:20,
//     extras:"something"
// }
//Lec#05
// let names:(string|number)[]=[];
// names.push("sa");
// names.push(12)
// names.push(false)
// let person:object;
// person={name:"salman",age:20}
// person="string";
// person=[];
// let person2:{
// name:string,
// age:number
// }
// person2={};
// person2={name:"salman",age:12}
// person2={name:"salman",age:12,extras:""}
//Lec#06 (dynamic any type)
// let names:any;
// names="salman"
// console.log(names);
// names=20
// console.log(names);
//Lec#07 (tsconfig.json)
//Lec#08 (functions)
// let greet:Function;
// greet=()=>{
//     console.log("salman")
// }
// greet()
// const add=(a:number,b:number,c?:number|string)=>{
//     return a+b;
// }
// let result=add(10,5)
//Lect#09 (type aliases)
// type StringOrNum=string|number;
// type ObjectWithName={name:string,uid:StringOrNum}
// const logDetails=(uid:StringOrNum,item:string)=>{
//     console.log(`${item} has uid of ${uid}`);
// }
// const greet=(user:ObjectWithName)=>{
//     console.log(`${user.name} says hello`);
// }
//Lec#10 (functions with signatures)
// let fun1:()=>void
// fun1=()=>{
//     console.log("hello salman");
// }
// let fun2:(a:number,b:number)=>number
// fun2=(a,b)=>{
//     return a*b 
// }
