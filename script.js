
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

//Local Storage
//Tried using bits of lesson activites to try and piece something together, along with information online.

//Failed attempt 1

/*
var todoInput = document.querySelector("#inputRow1");
var

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("inputRow1"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // Render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("inputRow1", JSON.stringify(todos));
  }
  
  // When form is submitted...
  todoForm.addEventListener("buttonRow1", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });


// When a element inside of the todoList is clicked...
todoInput.addEventListener("click", function(event) {
    var element = event.target;
  
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
*/


//Failed attempt 2

/*
var rowStore1 = document.querySelector("#inputRow1");
var storeBtn1 = document.querySelector("buttonRow1");

renderLastEntry();


function renderLastEntry() {
    var inputRow1 = localStorage.getItem("inputRow1");
}

var rowStorage1 = localStorage.getItem("rowStorage1");

rowStore1.textContent = rowStorage1;

storeBtn1.addEventListener("click", function () {
    rowStore1.textContent = rowStorage1;

    localStorage.setItem("rowStorage1", rowStorage1);
});
*/


//Failed Attempt 3

/*
var txtRow1 = document.getElementById("inputRow1").nodeValue;

document.getElementById("buttonRow1").addEventListener("click", saveRow1() {
    txtRow1.localStorage.setItem("");
});

*/