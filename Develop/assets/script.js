// variables
var timeNow;
var hour;
var timer;
const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();

// display current date at top of page
var date = new Date();
var todaysDate = date.toDateString();
var displayDate = document.querySelector("#currentDay");
displayDate.append(todaysDate);

// get current time 
function currentHour() {
    var timeNow = date.getHours();
    // check for time in miltitary time
    console.log(timeNow);
    
    var amPM = "";
    
    // convert time to 12HR 
    if (timeNow > 12){
        var hour = timeNow -12;
        suffix = "PM";
    }
    else {
        var hour = timeNow;
        suffix = "AM";
    }
    console.log(hour + suffix);
    return hour + suffix;
}
currentHour();

// create function to color time blocks based on current time
// time for planner will be between 8:00-18:00
function colorCodeTime() {
    timer = setInterval(colorCodeTime, 1000);
    
    // if the time now is between working hours, defined as 8AM-6PM
    if (timeNow >=8 && timeNow <=20){
        for (var i=1; i<=13; i++) {
            let hourBlock = parseInt($('#time'+i).text());
           
            // if the hourblock & time now are equal, use css style for 'present'
            if (hourBlock == timeNow) {
                $('#todo'+i).css('present');
                continue;
            }
            // if hourblock is less than the time now, use css style for 'past'
            if (hourBlock < timeNow) {
                $('#todo'+i).css('past');
            }
            // if the hourblock is greater than the time now, use css style for 'future'
            else {
                $('#todo'+i).css('future');
            }
        }
    }

    // if time now is outside of working hours, defualt blocks to be a different color
    else {
        clearInterval(timer);
        $('textarea').css('background-color', 'pink');
    }
};

// store input to local storage if a 'Save Button' is clicked
$('#saveBtn1').click(function(){
    const text1 = document.getElementById("todo1").value;
    const textString1 = JSON.stringify(text1);
    localStorage.setItem("text1", textString1);
   
    if(localStorage == null) {
    $window.localStorage.setItem("text1", textString1);
    }
});

$('#saveBtn2').click(function(){
    const text2 = document.getElementById("todo2").value;
    const textString2 = JSON.stringify(text2);
    localStorage.setItem("text2", textString2);
   
    if(localStorage == null) {
    $window.localStorage.setItem("text2", textString2);
    }
});

$('#saveBtn3').click(function(){
    const text3 = document.getElementById("todo3").value;
    const textString3 = JSON.stringify(text3);
    localStorage.setItem("text3", textString3);
   
    if(localStorage == null) {
    $window.localStorage.setItem("text3", textString3);
    }
});

$('#saveBtn4').click(function(){
    const text4 = document.getElementById("todo4").value;
    const textString4 = JSON.stringify(text3);
    localStorage.setItem("text4", textString4);
   
    if(localStorage == null) {
    $window.localStorage.setItem("text4", textString4);
    }
});




colorCodeTime();