const calculatorTip = () => {

let totalBillAmount = document.getElementById('bill').value;
let numberOfPerson = document.getElementById('numOfPerson').value;

// The service level
let tipPercent;
if (document.getElementById("level1").checked) tipPercent = 0.3;
if (document.getElementById("level2").checked) tipPercent = 0.2;
if (document.getElementById("level3").checked) tipPercent = 0.15;
if (document.getElementById("level4").checked) tipPercent = 0.1;
if (document.getElementById("level5").checked) tipPercent = 0;

console.log(totalBillAmount);
console.log(tipPercent);
console.log(numberOfPerson);

//Validate input
if (totalBillAmount === "") {
  alert ("Please enter the total bill amount");
  return;
} else if (numberOfPerson === "0") {
  alert ("Please select number of people");
  return;
}

  // Calculate the tip value
   let tipValue = (totalBillAmount * tipPercent)/numberOfPerson;
  

  // round to two decimal places
   tipValue = tipValue.toFixed(2);
  
  //Display the tip
  document.getElementById('displayValue').innerHTML = "$ " + tipValue;
  

};

document.getElementById('calculator').onclick= 
function() {
  calculatorTip();
};
