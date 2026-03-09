const loginForm =document.getElementById('loginForm');
const registerForm =document.getElementById('registerForm');
document.getElementById('perant').addEventListener('click',(e)=>{
    loginForm.classList.add("hidden")
    registerForm.classList.add("hidden")
    const acc=e.target.id
    acc==="tabLogin"?loginForm.classList.remove("hidden"):registerForm.classList.remove("hidden")
    
})


let userData=JSON.parse(localStorage.getItem("Data"))||null
document.getElementById("registerBtn").addEventListener('click',(event)=>{
    event.preventDefault();
    const regUsername=document.getElementById("regUsername").value;
    const regPassword=document.getElementById("regPassword").value;
    const regConfirm=document.getElementById("regConfirm").value;
    if(regUsername.length<4){
        alert(' Name must exceed 4 word ')
    }
    if(regConfirm==regConfirm){
        console.log("password match");
        
    }
    alert(" Congratulation your account has been created")
    userData={
        username:regUsername,
        userpass:regPassword,
    }
    localStorage.setItem("Data",JSON.stringify(userData))
})





document.getElementById('loginBtn').addEventListener("click", (event) => {
    const inp = document.getElementById('loginUsername').value;
    const pass = document.getElementById('loginPassword').value;
    event.preventDefault();
    inp==userData.username && pass==userData.userpass ? window.location.assign('/home.html') : alert(' Wrong credential')
})
