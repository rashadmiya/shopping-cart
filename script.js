




function processValDec (id) {
    let inputVal = document.getElementById(id);
    let inputValue = inputVal.value;
    let val;
    if(inputValue > 0 && inputValue <= 5) {
        val = parseFloat(inputValue) - 1;
    } else {
        val = 1;    
    }
    return val;
}

function processValInc (id){
    let inputVal = document.getElementById(id);
    let inputValue =parseFloat(inputVal.value);
    let pVal;
    if (inputValue <5 && inputValue >= 1) {
        pVal= inputValue +1;
    } else {
        pVal = 1;
    }
   return pVal;
}

function processAmount (quantities,price){
    
    price = parseFloat(price);
    let totallAmount = price *quantities;
    console.log(`${quantities}*${price} = ${totallAmount}`);
       return totallAmount;
}


let minusValue = document.querySelector('#minusValue');
let plusValue = document.querySelector('#plusValue');
let price = document.getElementById('itemAmount').innerText;



let totalBill = 0;
let billTwo = 0;



minusValue.addEventListener('click',() => {

    let returnVal = processValDec('inputValue');
    document.getElementById("inputValue").value = returnVal;

    let totallAmount = processAmount(returnVal,price);
    document.getElementById('itemAmount').innerText = totallAmount;

    totalBill = totallAmount;
    
});

plusValue.addEventListener('click', () => {

    let returnVal = processValInc('inputValue');
    document.getElementById('inputValue').value = returnVal;


  let totallAmount = processAmount(returnVal,price);
  document.getElementById('itemAmount').innerText = totallAmount;
  totalBill = totallAmount;
 
});

let caseMinus = document.getElementById('caseMinus');
let casePlus = document.getElementById('casePlus');
let casePrice = document.getElementById('casePrice').innerText;

caseMinus.addEventListener('click',() => {

    let returnVal = processValDec('caseValue');
    document.getElementById('caseValue').value = returnVal;

    let totallAmount = processAmount(returnVal,casePrice);
    document.getElementById('casePrice').innerText = totallAmount;
    billTwo = totallAmount;

});

casePlus.addEventListener('click',() => {

    let returnVal = processValInc('caseValue');
    document.getElementById('caseValue').value = returnVal;

    let totallAmount = processAmount(returnVal,casePrice);
    document.getElementById('casePrice').innerText = totallAmount;
    billTwo = totallAmount;

});

document.getElementById('checkOut').addEventListener('click',() => {

    let totbil = billTwo + totalBill
    let vat  = (totbil/100)*14;
    let finalAmount =totbil+vat
     document.getElementById('initialAmount').innerText = totbil;
     document.getElementById('vat').innerText = Math.round(vat);
     document.getElementById('finalAmount').innerText = Math.round(finalAmount);

})
