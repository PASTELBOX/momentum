// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// function onLoginBtnClick() {
//     // console.log("hello",loginInput.value);
//     // console.log("click!!!!");
//     const username = loginInput.value;
//     if(username === "") {
//         alert("Please write your name");
//     } else if(username.length>15) {
//         alert("Your name is too long.")
//     }   
// }

//loginButton.addEventListener("click", onLoginBtnClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

//const link = document.querySelector("a");

function onLoginSubmit(event) {
    // const username = loginInput.value;
    event.preventDefault();
    //console.log(loginInput.value);
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
    //greeting.innerText = "Hello "+username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
//     //alert("clicked!");
// }

loginForm.addEventListener("submit",onLoginSubmit);
//link.addEventListener("click",handleLinkClick);