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

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // h1.className = "active";
    // const clickedClass = "clicked";
    // if(h1.className === clickedClass){
    //     h1.className =  "";
    // } else {
    //     h1.className= clickedClass;
    // }

    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle("clicked");


    // console.log(h1.style.color);
    // h1.style.color="blue";
    // console.log(h1.style.color);
    
    
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
}

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL GOOOD");
// }

h1.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.addEventListener("mouseleave",handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);
