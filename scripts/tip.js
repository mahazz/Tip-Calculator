<script type="text/javascript">
//Calculate Tip
function calculateTip() {
var bill = document.getElementById("bill").value;
var tip = document.getElementById("tip").value;
var numOfPeople = document.getElementById("people").value;

//validate input
if (bill === "" || tip == 0) {
  alert("Please enter values");
  return;
}
//Check to see if this input is empty or less than or equal to 1
if (numOfPeople === "" || numOfPeople <= 1) {
  numOfPeople = 1;
  document.getElementById("each").style.display = "none";
} else {
  document.getElementById("each").style.display = "block";
}

//Calculate tip
var total = (bill * tip) / numOfPeople;
//round to two decimal places
total = Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point
total = total.toFixed(2);
//Display the tip
document.getElementById("tip-per-person").style.display = "";
document.getElementById("tip1").innerHTML = total;
document.getElementById("tip2").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("tip-per-person").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
calculateTip();

};