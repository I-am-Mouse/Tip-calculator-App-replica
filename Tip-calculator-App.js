const buttons =  document.getElementsByClassName("btn");
const messageSpan = document.querySelector(".message");
const tipAmountValueH2 = document.querySelector(".tip-amount-value");
const totalAmountValueH2 = document.querySelector(".total-amount-value");
const customInput = document.querySelector(".btn-custom");
const resetBtn = document.querySelector(".reset-btn"); 
messageSpan.style.display = "none";

function calculateTipping(totalBill, numOfPeople, percent) {
    const tipPerPerson = totalBill/numOfPeople;
    const tipAmountPerPerson = tipPerPerson * (percent/100);
    const personTotal = tipPerPerson  + tipAmountPerPerson;
    console.log(tipAmountPerPerson, personTotal)
    // console.log(totalBill, numOfPeople, percent)
    return [tipAmountPerPerson, personTotal];
}

const totalBillInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".Num-of-People-input");

function showTips (percentage) {
    const people = parseInt(peopleInput.value.trim())
    if(people > 0) {
        messageSpan.style.display = "none";
        const values = calculateTipping(totalBillInput.value, people, percentage);
        tipAmountValueH2.innerHTML = "&dollar;" + values[0].toFixed(2);
        totalAmountValueH2.innerHTML = "&dollar;" + values[1].toFixed(2);
    } else {
        messageSpan.style.display = "inline";
        messageSpan.style.color = "red";
    }
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const percentage = parseInt(button.innerHTML.slice(0, -1));
    button.onclick = function() {
        showTips(percentage);
    }
}

customInput.onchange = function () {
    showTips(customInput.value);
}

resetBtn.onclick = function () {
    tipAmountValueH2.innerHTML = "&dollar;0";
    totalAmountValueH2.innerHTML = "&dollar;0";
    customInput.value = 0;
    totalBillInput.value = 0;
    peopleInput.value = 0;
}