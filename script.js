




function processValDec (id) {
    let inputVal = document.getElementById(id);
    let inputValue = inputVal.value;
    let val;
    if(inputValue > 0 && inputValue <= 5) {
        val = parseFloat(inputValue) - 1;
    } else {
        val = 0;    
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

function subTotal (id1,id2) {

    let itemAmount = document.getElementById(id1).innerText;
    let casePrice = document.getElementById(id2).innerText;

   let  subtotal = parseInt(itemAmount) + parseInt(casePrice);
   return subtotal;
}
function calculateVat (temp) {
    let vat = (temp /100) * 14;
    return Math.round(vat)
}

function finalAmount (temp,callback) {
    let totalls = temp + callback;
    return totalls
}

function finalCalculation() {
    let temp = subTotal('itemAmount','casePrice');
    document.getElementById('subtotal').innerText = temp;
    document.getElementById('vat').innerText = calculateVat(temp);
    document.getElementById('finalAmount').innerText = finalAmount(temp,calculateVat(temp));
}


let minusValue = document.querySelector('#minusValue');
let plusValue = document.querySelector('#plusValue');
let price = document.getElementById('itemAmount').innerText;




minusValue.addEventListener('click',() => {

    let returnVal = processValDec('inputValue');
    document.getElementById("inputValue").value = returnVal;

    let totallAmount = processAmount(returnVal,price);
    document.getElementById('itemAmount').innerText = totallAmount;
   
//    let temp = subTotal('itemAmount','casePrice');
//     document.getElementById('subtotal').innerText = temp;
//     document.getElementById('vat').innerText = calculateVat(temp);
//     document.getElementById('finalAmount').innerText = finalAmount(temp,calculateVat(temp));

finalCalculation ()

    
});

plusValue.addEventListener('click', () => {

    let returnVal = processValInc('inputValue');
    document.getElementById('inputValue').value = returnVal;


  let totallAmount = processAmount(returnVal,price);
  document.getElementById('itemAmount').innerText = totallAmount;

//   let temp = subTotal('itemAmount','casePrice');
//   document.getElementById('subtotal').innerText = temp;
//   document.getElementById('vat').innerText = calculateVat(temp);
//   document.getElementById('finalAmount').innerText = finalAmount(temp,calculateVat(temp));

finalCalculation ()

 
});

let caseMinus = document.getElementById('caseMinus');
let casePlus = document.getElementById('casePlus');
let casePrice = document.getElementById('casePrice').innerText;

caseMinus.addEventListener('click',() => {

    let returnVal = processValDec('caseValue');
    document.getElementById('caseValue').value = returnVal;

    let totallAmount = processAmount(returnVal,casePrice);
    document.getElementById('casePrice').innerText = totallAmount;
    
  

    finalCalculation ()

});

casePlus.addEventListener('click',() => {

    let returnVal = processValInc('caseValue');
    document.getElementById('caseValue').value = returnVal;

    let totallAmount = processAmount(returnVal,casePrice);
    document.getElementById('casePrice').innerText = totallAmount;
   
    finalCalculation ()
});


finalCalculation ()
    