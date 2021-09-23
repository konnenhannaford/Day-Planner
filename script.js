$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
timeblock()
})

function timeblock (){
var times = {"9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"}

for (vari=1; i<times.length; i++) {
    var nexttime = $("#example").clone();
    nexttime.atr("id", times[i]);
    nexttime.children(".hour").text(times[i]);
    nexttime.appendto(".container");

    var timeblocktextbox = $('#${times[i]}')

    // past 
    if (moment().format ("ha") === times[i]) timebloxktextbox.children(".description").addclass("present");
    // present
    if (moment().format ("ha") === times[i]) timebloxktextbox.children(".description").addclass("present");
    // future
    if (moment().format ("ha") === times[i]) timebloxktextbox.children(".description").addclass("present");
}

