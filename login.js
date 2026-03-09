document.getElementById('inpBtn').addEventListener("click", () => {
    const inp = document.getElementById('emailInput').value;
    const pass = document.getElementById('inputPassword').value;
    event.preventDefault();
    inp == 'admin' && pass == '4646' ?  window.location.assign('/home.html'): alert(' Wrong credential')


})