$(document).ready(function() {

    var today = moment().format("MMMM Do YYYY");
    var currentHour = moment().format("H");

    $("#currentDay").text(today);

    $(".description").each(function(index, element) {
        var hour = index + 9;
        if (hour == currentHour) {
            $(this).addClass("present");
        } else if (hour > currentHour) {
            $(this).addClass("future");
        } else (hour < currentHour);
            $(this).addClass("past");
    });

    $(".saveBtn").click(function() {
        
    });
    
});