/*document.getElementById("signupbtn").onclick=function(){
let name=document.getElementById("fullName").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirmPassword").value;
if (name===""||email===""||password===""||confirmPassword===""){
    alert("please fill all the fields.");
    return;
}
if (!email.includes("@")||!email.includes(".")){
    alert("please enter a valid email.");
    return;
}
if (password!==confirmPassword){
    alert("passwords do not match.");
    return;
}
let user= {
    fullName: name,
    email: email,
    password: password
};
localStorage.setItem("userAccount",JSON.stringify(user));
alert("Account created successfully!");
window.location.href="login.html"

const loginButton=document.getElementById("loginBtn");
if (loginButton){
    loginButton.onclick=function(){
let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;
let user = JSON.parse(localStorage.getItem("userAccount"));
if (!user){
    alert("No account found. Please Signup first.");
    return;
if(email===user.email && password===user.password){
    alert("Login successful!");
        window.location.href="home.html";
    }
else {
        alert("Incorrect email or password! try again");
    }
    }
}
}
*/
// ---------------- SIGNUP FUNCTION ----------------
const signupButton = document.getElementById("signupBtn");

if (signupButton) {
    signupButton.onclick = function () {

        let name = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all the fields.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let user = {
            fullName: name,
            email: email,
            password: password
        };

        localStorage.setItem("userAccount", JSON.stringify(user));

        alert("Account created successfully!");
        window.location.href = "login.html";
    }
}



// ---------------- LOGIN FUNCTION ----------------
const loginButton = document.getElementById("loginBtn");

if (loginButton) {
    loginButton.onclick = function () {

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let user = JSON.parse(localStorage.getItem("userAccount"));

        if (!user) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (email === user.email && password === user.password) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Incorrect email or password! Try again.");
        }
    }
}
