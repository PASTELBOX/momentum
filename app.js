console.log(54545454);
console.log("lalalalala");
console.log(5+2);
console.log(5*2);
console.log(5/2);

// let은 값이 바뀔수 있고 const는 불가능
// 항상 const 가끔 let var은 사용하지 말자
// var은 let과 const 두개 전부의 의미를 가지지만 의미를 알 수있는 변수를 할당해주는것이 좋다

const a=5;
const b=2;
let myName="nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your name is "+ myName);

const amIfat = true;
//boolean ture ,false

let something;
//undefiend

const nothing = null;
//null

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

//const daysOfWeek = mon + tue + wed + thu+ fri + sat + sun;
const daysOfWeek = [mon , tue , wed , thu, fri , sat];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the arry
daysOfWeek.push(sun);

console.log(daysOfWeek);
