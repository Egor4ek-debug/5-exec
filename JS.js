//1 задание
/*var newWin
function getLocation(position) {
    var latidude=position.coords.latitude;
    var longitude=position.coords.longitude;
    newWin.document.write("Широта "+latidude+"<br/>" );
    newWin.document.write("Долгота "+longitude+"<br/>" );
    setTimeout(function(){
        newWin.close();
    },20000);
 }
function open_win() {
     newWin = window.open("");
     navigator.geolocation.getCurrentPosition(getLocation);
     
}
*/

//2 задание

var browser, uAgent = navigator.userAgent;

if(uAgent.indexOf("Chrome") != -1) {

browser = "Google Chrome";

} else if (uAgent.indexOf("Safari") != -1) {

browser = "Apple Safari";

} else if (uAgent.indexOf("Opera") != -1) {

browser = "Opera";

} else if (uAgent.indexOf("Firefox") != -1) {

browser = "Mozilla Firefox";

} else if (uAgent.indexOf("MSIE") != -1) {

browser = "Microsoft Internet Explorer";

}

document.write(browser + "<br/>");

var Width = window.screen.width;
var Height = window.screen.height;
document.write("Высота "+ Width +"<br/>"+"Ширина "+Height);
