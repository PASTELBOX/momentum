// // const loginForm = document.getElementById("login-form");
// // const loginInput = loginForm.querySelector("input");
// // const loginButton = loginForm.querySelector("button");

// // const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");
// // function onLoginBtnClick() {
// //     // console.log("hello",loginInput.value);
// //     // console.log("click!!!!");
// //     const username = loginInput.value;
// //     if(username === "") {
// //         alert("Please write your name");
// //     } else if(username.length>15) {
// //         alert("Your name is too long.")
// //     }   
// // }

// //loginButton.addEventListener("click", onLoginBtnClick);


// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// //const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     // const username = loginInput.value;
//     event.preventDefault();
//     //console.log(loginInput.value);
//     const username = loginInput.value;
//     loginForm.classList.add("hidden");
//     console.log(username);
//     //greeting.innerText = "Hello "+username;
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// // function handleLinkClick(event){
// //     event.preventDefault();
// //     console.dir(event);
// //     //alert("clicked!");
// // }

// loginForm.addEventListener("submit",onLoginSubmit);
// //link.addEventListener("click",handleLinkClick);



//2차 공부 코드

// alert("hi");
// console.log(54545454);
// console.log("lalalalala");

// const a = 5;
// const b = 2;
// const myName = "nico";

//const는 변수가 변하지 않고 let은 변한다 고로 변하게 하고 싶으면 let을 사용하고 아닌경우에는 const 사용
//항상 const 가끔 let 절대로 사용안하는 var 가 있다

// let a = 5;
// let b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("hello " + myName);

// myName = "nicolas"

// console.log("your new name is " + myName);

//boolean
// const amIFat = null;
// let something;
// console.log(amIFat , something);

// //array
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

// // const nonsense = [1, 2, "hello" ,false ,null, true, undefined, "nico"]
// // console.log(daysOfWeek , nonsense);

// //Get Item from Array
// // console.log(daysOfWeek[4]);
// console.log(daysOfWeek);

// //Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");

// console.log(toBuy[2]);


//object
// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = " little bit";

// // player.name
// // player.points
// // player.handsome

// //player[0] == name
// //player[1] == points
// const player = ["nico", 1212, false, "little bit"];

// const player = {
//     name : "nico",
//     points : 10,
//     fat : true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;
// player.lastName = "potato";
// player.points = player.points + 15;

// console.log(player);

//Functions
// console.log("Hello my name is Nico");
// console.log("Hello my name is Dal");
// console.log("Hello my name is Shigatsu");
// console.log("Hello my name is Flynn");

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide(a,b) {
//     console.log(a / b);
// }

// plus(60, 8);
// divide(98,20);

// const player = {
//     name : "nico",
//     sayHello : function(otherPersonsName){
//         console.log("hello " + otherPersonsName + " nice to meet you!");
//     }
// }

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("nico");

//Recap
const a = 5;
let isNicoFat = true;

isNicoFat = false;