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
        } else if (hour < currentHour) {
            $(this).addClass("past");
        }

        var hourId = "hour-" + hour;
        var text = localStorage.getItem(hourId);
        if (text !== null) {
            $(this).val(text);
        }
    });

    $(".saveBtn").click(function() {
        var text = $(this).prev().val();
        var hourId = $(this).parent().attr("id");
        localStorage.setItem(hourId, text);
    });
    
});