let st=JSON.parse(localStorage.getItem("Store"))||null
document.getElementById('calculate').addEventListener("click", () => {
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    const totaltip=(tip/100)*bill;
    const totalBiill=Number(bill)+totaltip;
    alert(`Your total Bill is ${totalBiill}`);
    st={
        bill:bill,
        tip:tip,
    }
    localStorage.setItem("Store",JSON.stringify(st))
    
    
    // console.log(st);
    alert(st.bill)
})