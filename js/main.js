const selectName = document.getElementById("full-name");
const selectKm = document.getElementById("kilometers");
const selectAge = document.getElementById("age");


const fullNameEl = document.querySelector(".full-name")
const priceEl = document.querySelector(".price");
const codCp = document.querySelector(".cod")
const carrozzaEl = document.querySelector(".carrozza");





const formEl = document.querySelector("form");

 


formEl.addEventListener("submit", function (event) {
    event.preventDefault();

const priceInitial = kilometers.value * 0.21;
console.log(priceInitial);

const fullNameValue = selectName.value;

let priceValue;
if (selectAge.value === "Minorenne") { 
    priceValue = priceInitial - (priceInitial * 20) / 100;
} else if (selectAge.value === "Over65") {
    priceValue = priceInitial - (priceInitial * 40) / 100;
} else {
    priceValue = priceInitial;
}
priceEl.innerHTML = priceValue.toFixed(2);
fullNameEl.innerHTML = fullNameValue;












})



