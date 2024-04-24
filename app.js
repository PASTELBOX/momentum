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

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
    // const username = loginInput.value;
    tomato.preventDefault();
    console.log(tomato);
}

function handleLinkClick(){
    alert("clicked!");
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);