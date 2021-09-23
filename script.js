$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    timeblock()
})

function timeblock (){
    var times = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
    for (var i=0; i < times.length; i++) {

    var nexttime = $("#example").clone();
    nexttime.attr("id", times[i]);
    nexttime.children(".hour").text(times[i]);
    nexttime.appendTo(".container");
    
    var timeblocktextbox = $(`#${times[i]}`)
    
    createTimeBasedClasses(timesArr,i,timeblocktextbox)

    timeblocktextbox.children(".saveBtn").on('click',saveToLocalStorage);

}
    $("#example").remove()
    showLocalStorageValues()



function createTimeBasedClasses(times,i,timeblocktextbox) {

    // past 
    if (moment().format ("hA") === times[i]) timeblocktextbox.children(".description").addclass("present");
    // present
    else if (moment( times[i], "hA").isBefore ()) timeblocktextbox.children(".description").addclass("past");
    // future
    else timeblocktextbox.children(".description").addClass("future");
      }
      
let storageArray = []
    
function saveToLocalStorage() {

        let textAreaValue = $(this).siblings("textarea").val();
        let time= $(this).siblings("p").text();
        const storageObj = {time,textAreaValue}
        storageArray.push(storageObj)
        localStorage.setItem('storageArray', JSON.stringify(storageArray));
        localStorage.getItem("storageArray")
    }
    
    
    function showLocalStorageValues() {
        var savedData = JSON.parse(localStorage.getItem("storageArray"))
        if (savedData){
            savedData.forEach(element => {
                var targetTextArea = $(`#${element.time}`)
                targetTextArea.children("textarea").val(element.textAreaValue)
            });
        }
    }
    