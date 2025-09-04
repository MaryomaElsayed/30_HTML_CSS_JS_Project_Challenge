const today = new Date() // date objectooooooo

const year = today.getFullYear();
const day = today.getDate();


// To get day name not number هنعمل ايييية؟
// نستخدم toLocalString method

const monthName = today.toLocaleString("en-us" , {month : "long"});
const dayName = today.toLocaleString("en-us" , {weekday : "long"});

// DOM TIME :
document.getElementById("dayName").innerHTML = dayName;
document.getElementById("monthName").innerHTML = monthName;
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;




