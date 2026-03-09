
document.getElementById('calculate').addEventListener("click", () => {
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    const totaltip=(tip/100)*bill;
    const totalBiill=Number(bill)+totaltip;
    alert(`Your total Bill is ${totalBiill}`);

})