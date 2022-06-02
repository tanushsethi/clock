var today = new Date();

var pos1 = 270;
var pos2 = 270;
var pos3 = 270;

const rotateS = (hand) => {
    pos1 = pos1 + 6;
    second.style.transform = "rotate(" + pos1.toString() +"deg)";
}
const rotateM = (hand) => {
    pos2 = pos2 + 6;
    minute.style.transform = "rotate(" + pos2.toString() +"deg)";
}
const rotateH = (hand) => {
    pos3 = pos3 + 6;
    hour.style.transform = "rotate(" + pos3.toString() +"deg)";
}

var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

second.style.transform = "rotate(" + pos1.toString() +"deg)";
minute.style.transform = "rotate(" + pos2.toString() +"deg)";
hour.style.transform = "rotate(" + pos3.toString() +"deg)";
setInterval(rotateS, 1000);
setInterval(rotateM, 1000*60);
setInterval(rotateH, 1000*60*60);

