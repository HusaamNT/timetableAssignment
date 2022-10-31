const timeBlockEl = $(".timeBlocks")
const timeBlockInputs = $(".timeBlockInputs")
const timeBlockSave = $(".timeBlockSave")

let today = moment();
$("#currentDate").text(today.format("MMM Do, YYYY"));

let todayDate = today.format("[Today is] dddd")
$("#currentDay").text(todayDate);

let todayTime = today.format("[Current time: ] hh:mm:ss A")
$("#currentTime").text(todayTime);

