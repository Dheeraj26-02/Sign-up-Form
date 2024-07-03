const name1 = document.querySelector("#input-name");
const yname = document.querySelector(".yourname");
const ypassword = document.querySelector(".yourpassword");
const password = document.querySelector("#input-password");
const email = document.querySelector("#input-email");
const yemail = document.querySelector(".youremail");
const confirm = document.querySelector("#confirm-password");
const yconfirm = document.querySelector(".conpassword");




name1.addEventListener("click", () => {
    yname.style.color = "#2e3034";
    yname.style.transform = "scale(1.1)";
    yname.style.transition = ".5s";
})
password.addEventListener("click", () => {
    ypassword.style.color = "#2e3034";
    ypassword.style.transform = "scale(1.1)";
    ypassword.style.transition = ".5s";
})
email.addEventListener("click", () => {
    yemail.style.color = "#2e3034";
    yemail.style.transform = "scale(1.1)";
    yemail.style.transition = ".5s";
})
confirm.addEventListener("click", () => {
    yconfirm.style.color = "#2e3034";
    yconfirm.style.transform = "scale(1.1)";
    yconfirm.style.transition = ".5s";
})



const siginbtn = document.querySelector("#signin");
const inhead = document.querySelector(".in");
const signupbtn = document.querySelector("#signip");
const uphead = document.querySelector(".up")


const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName === "index") {
    inhead.style.fontWeight = "700";
    inhead.style.setProperty('--inafter', '12%')
}
else if(pageName === "index2")
{
    uphead.style.fontWeight = "700";
    uphead.style.setProperty('--upafter','12%')
}