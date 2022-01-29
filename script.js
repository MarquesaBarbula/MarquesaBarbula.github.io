// SCRIPT TIME COUNTER

// const timeContainer = document.getElementById("time-container");
// const BIRTH_DAY = "02-23-2021";
// const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
// const intlNumberFormatter = new Intl.NumberFormat("en-US");

// setInterval(() => {
//  const now = new Date();
//  const difference = Math.floor(
//    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
//  );

//  timeContainer.innerText = intlNumberFormatter.format(difference);
// }, 1000);


// SCRIPT DARK MODE

// Select the button
const btn = document.querySelector("#checkbox");

// Listen for a click on the button
btn.addEventListener("click", function() {
// Then toggle (add/remove) the .dark-theme class to the body
document.body.classList.toggle("dark-theme");
});