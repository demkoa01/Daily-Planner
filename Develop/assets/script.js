// display current date at top of page
var date = new Date();
var todaysDate = date.toDateString();
var displayDate = document.querySelector("#currentDay");
displayDate.append(todaysDate);

// get current time 
var timeNow = date.getHours();
console.log(timeNow);

// create function to color time blocks based on current time
// time for planner will be between 8:00-18:00
function colorCodeTime() {
    timer = setInterval(colorCodeTime, 1000);

    // if the time now is between working hours, defined as 8AM-6PM
    if (timeNow >=8 && timeNow <=18){
        for (var i=1; i<=8; i++) {
            let hourBlock = parseInt($('#time'+i).text());

            // if the hourblock & time now are equal, use css style for 'present'
            if (hourBlock === timeNow) {
                $('#text'+i).css('present');
            }
            // if hourblock is less than the time now, use css style for 'past'
            if (hourBlock < timeNow) {
                $('#text'+i).css('past');
            }
            // if the hourblock is greater than the time now, use css style for 'future'
            else {
                $('#text'+i).css('future');
            }
        }
    }

    // if time now is outside of working hours, defualt blocks to be a different color
    else {
        clearInterval(timer);
        $('textarea').css('background-color', '#fafad2');
    }
};

// variables
const hour8 = $('#8-am').text();
const hour9 = $('#9-am').text();
const hour10 = $('#10-am').text();
const hour11 = $('#11-am').text();
const hour12 = $('#12-pm').text();
const hour1 = $('#1-pm').text();
const hour2 = $('#2-pm').text();
const hour3 = $('#3-pm').text();
const hour4 = $('#4-pm').text();
const hour5 = $('#5-pm').text();
const hour6 = $('#6-pm').text();

// store input to local storage
$('#saveBtn').click(function(){
    if($('#todo').val()) {
        localStorage.removeItem('todo');
    }

    const hourString = JSON.stringify(hour8);
    localStorage.setItem(hour8, $('#todo').val());
});

colorCodeTime();
