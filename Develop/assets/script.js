var storedBlocks = [];
var storedBlocks_NAME = "Stored Blocks";

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

const hour8Input = parseInt(hour8);

// // store input to local storage
// $('#saveBtn8').click(function(){
//     if($('#todo8').val()) {
//         localStorage.removeItem('todo8');
//     }

//     localStorage.setItem("todo", JSON.stringify(hour8));
//     console.log(hour8String);
//     console.log(localStorage.setItem("todo", JSON.stringify(hour8)))
// });

// edit stored time blocks
function editBlocks(pText, pID) {
    nBlock = {
        id: pID,
        input: pText.trim()
    }

    for (var i=0; i<storedBlocks.length; i++) {
        if(storedBlocks[i].id === nBlock.id) {
            storedBlocks.splice(i,1);
            localStorage.setItem(storedBlocks_NAME, JSON.stringify(storedBlocks));
            return null;
        }
    }
    storedBlocks.push(nBlock);
    localStorage.setItem(storedBlocks_NAME, JSON.stringify(storedBlocks));
};

function getStoredBlockTxt() {
    if(localStorage.getItem(storedBlocks_NAME)) {
        storedBlocks = JSON.parse(localStorage.getItem(storedBlocks_NAME));
        storedBlocks.forEach(iBlock => {
            iID = "#" + iBlock.id;
            $iBlock = $(document.getElementById(iBlock.id));
            $iBlock.val(iBlock.innput);

            
        });
    }
};


colorCodeTime();
getStoredBlockTxt();

// when the save button is clicked, it should trigger to update/save the updated input
$(".saveBtn").click(function(){
    console.log("save clicked");
    $(this).toggleClass('unlocked');
    $iTextArea = $($(this).parent().children()[1]);
    iInput= document.getElementsByClassName("textarea").val(text);
    iID = document.getElementsByClassName("textarea").attr("id");
    editBlocks(iInput, iID);
});