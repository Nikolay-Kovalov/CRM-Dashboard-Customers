const aside = document.querySelector(".dashboard");
const customerSection = document.querySelector(".customers");
const userGreeting = document.querySelector(".user-greeting");

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
aside.classList.add("animated-aside");
customerSection.classList.add("animated-customer");
userGreeting.classList.add("animated-userGreeting")
}