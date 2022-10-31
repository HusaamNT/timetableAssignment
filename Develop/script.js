const timeBlockEl = $(".timeBlocks")
const timeBlockInputs = $(".timeBlockInputs")
const timeBlockSave = $(".timeBlockSave")

const time9am = $("#9am")
const time10am = $("#10am")
const time11am = $("#11am")
const time12pm = $("#12pm")
const time1pm = $("#1pm")
const time2pm = $("#2pm")
const time3pm = $("#3pm")
const time4pm = $("#4pm")
const time5pm = $("#5pm")
const time6pm = $("#6pm")
const time7pm = $("#7pm")
const time8pm = $("#8pm")
const time9pm = $("#9pm")
const time10pm = $("#10pm")
const time11pm = $("#11pm")
const time12am = $("#12am")
const time1am = $("#1am")
const time2am = $("#2am")
const time3am = $("#3am")
const time4am = $("#4am")
const time5am = $("#5am")
const time6am = $("#6am")
const time7am = $("#7am")

let today = moment();
$("#currentDate").text(today.format("MMM Do, YYYY"));

let todayDate = today.format("[Today is] dddd")
$("#currentDay").text(todayDate);

let todayTime = today.format("[Current time: ] hh:mm:ss A")
$("#currentTime").text(todayTime);



