// display current date at top of page
var date = new Date();
var todaysDate = date.toDateString();
var displayDate = document.querySelector("#currentDay");
displayDate.append(todaysDate);

// get current time 
var timeNow = date.getHours();
console.log(timeNow);