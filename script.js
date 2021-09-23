$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    createTimeRows()
})


function createTimeRows() {
    let timesArr= ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]; 
    for (let i=0; i < timesArr.length; i++){

    let newTimeBlockEL= $("#sample").clone();
    
    newTimeBlockEL.attr("id", timesArr[i]); 

    newTimeBlockEL.children(".hour").text(timesArr[i]);
    newTimeBlockEL.appendTo(".container"); 
    
    let timeBlockTextarea = $(`#${timesArr[i]}`)

    createTimeBasedClasses(timesArr,i,timeBlockTextarea)

    timeBlockTextarea.children(".saveBtn").on('click',saveToLocalStorage);

}
    $("#sample").remove()
    showLocalStorageValues()
}


function createTimeBasedClasses(timesArr,i,timeBlockTextarea) {
    
    if (moment().format("hA") === timesArr[i]) timeBlockTextarea.children(".description").addClass("present");
    else if (moment(timesArr[i], "hA").isBefore())  timeBlockTextarea.children(".description").addClass("past");
    else timeBlockTextarea.children(".description").addClass("future"); 
}

let storageArray = []

function saveToLocalStorage() {

    let textAreaValue = $(this).siblings("textarea").val();
    let time= $(this).siblings("p").text();
    const storageObj = {time,textAreaValue}
    storageArray.push(storageObj)
    // console.log(storageArray)
    localStorage.setItem('storageArray', JSON.stringify(storageArray));
    // localStorage.getItem("storageArray")
}


function showLocalStorageValues() {
    let savedData = JSON.parse(localStorage.getItem("storageArray"))
    if (savedData){
        savedData.forEach(element => {
            let targetTextArea = $(`#${element.time}`)
            targetTextArea.children("textarea").val(element.textAreaValue)
        });
    }
}