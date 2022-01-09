// variables
var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var time = moment();

// get current time 
function currentHour() {
    // set current date at the top header
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // load timeblock description textarea with what was in local storage
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}
currentHour();


// store input to local storage if a 'Save Button' is clicked
var saveBtn = $(".saveBtn");

// upon clicking a save button, the description text area should update with what the user just typed
saveBtn.on("click", function(){
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

// create function to color time blocks based on current time
// time for planner will be between 8:00-17:00
function colorCodeTime() {
    hour = time.hours();
    $(".time-block").each(function(){
        var timeNow = parseInt($(this).attr("id"));

        // color timeblocks green if in the future
        if (timeNow > hour) {
            $(this).addClass("future");
        }
        // color timeblock red if it is the current hour
        else if (timeNow === hour) {
            $(this).addClass("present");
        }
        // color timeblock gray if the hour had already past
        else {
            $(this).addClass("past");
        }
    });
};

colorCodeTime();
