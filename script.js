$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
timeblock()
})

function timeblock (){
var times = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
for (var i=0; i<times.length; i++) {


    var nexttime = $("#example").clone();
    nexttime.attr("id", times[i]);
    nexttime.children(".hour").text(times[i]);
    nexttime.appendto(".container");
    
    var timeblocktextbox = $("#${times[i]}")
    
    createTimeBasedClasses(timesArr,i,timeBlockTextarea)

    timeBlockTextarea.children(".saveBtn").on('click',saveToLocalStorage);

}
    $("#sample").remove()
    showLocalStorageValues()
}


function createTimeBasedClasses(timesArr,i,timeBlockTextarea) 
{

    // past 
    if (moment().format ("hA") === times[i]) timeblocktextbox.children(".description").addclass("present");
    // present
    else if (moment( times[i], "hA").isBefore ()) timeblocktextbox.children(".description").addclass("past");
    // future
    else timeblocktextbox.children(".description").addClass("future");
      }
    
    