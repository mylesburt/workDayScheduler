
//Date and Time

function renderTime () {

    //Date
    var myDate = new Date();
    var year = myDate.getFullYear();
        if (year < 1000) {
            year += 1900;
        }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var monthArray = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December");

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if (h == 24){
            h = 0;
        } else if (h > 12) {
            h = h - 0;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        var myClock = document.getElementById("currentDay");
        myClock.textContent = "" +dayArray[day]+ " " +dayM+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" +dayArray[day]+ " " +dayM+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

        //Past, Present, Future loop.        
        for(var row = 0; row <= 23; row++) {
            var currentRow = $("#row" + row);
            currentRow.removeClass(["past","present","future"]);
            if (row < h)
                currentRow.addClass("past");
            else if (row > h)
                currentRow.addClass("future");
            else if (row === h)
                currentRow.addClass("present");       
        }


        setTimeout("renderTime()", 1000);

}
renderTime();

//Day-month array

// var dateText = "";


var dayMonthArray = [
    "00","01","02","03","04","05","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"
];

/*
dayMonthArray.forEach(dateArray);
document.getElementById("date").innerHTML = dateText;


// for (var dateNum = 0; dateNum < dayMonthArray.length; dateNum++)


function dateArray(value, index, array) {
    dateText = dayMonthArray[0] + ":00";
}
*/






/*
var mulitRow = $("#timeblock");

for (var i = 0,i = dayMonthArray.length; i++) {
    var newRow = $("<div class="row"><div class="col-2">
      <p id="date"></p>
    </div>
    <div class="col">
      <input>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-outline-primary">Save</button>
    </div>
  </div> ")
}
*/

//document.getElementById("date").innerHTML = dayMonthArray[0] + "/09";


//repeating rows

/*
    for(i = 0;i<29;i++)
    document.getElementById("timeblock").innerHTML;
 */

 