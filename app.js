$(document).ready(function() { 

  // function to display items from localStorage
  var listItems = function() {
    // var data = localStorage.getItem(itemKey) // revisit later
    for(var i = 0; i < localStorage.length; i++) {
      $("ul").append("<li><span><i class ='fa fa-trash'></i></span>" + localStorage.key(i) + "<span><i class='fa fa-exclamation'></i></span></li>")
    }
  }

  //invoke function so that page always displays previous localStorage data
  listItems(); 


  // input to-do, display on html, & store to local storage (too much functionality in one, separate them - revisit later)
  $(".user-input").keypress(function(e) {
    if (e.which === 13) {
      // var item = new Item($(this).val()); //class instantiation //revisit
      var itemKey = $(this).val()
      // itemArr.push(item)
      // console.log(itemArr)
      localStorage.setItem(itemKey, itemKey) //do localStorage.setItem(itemKey, JSON.stringify(itemArr))
      // localStorage.setItem(itemKey, JSON.stringify(itemArr)); //adds item to localStorage, revisit later
      $(this).val(""); //resets the input value
      $("ul").append("<li><span><i class ='fa fa-trash'></i></span>" + itemKey + "<span><i class='fa fa-exclamation'></i></span></li>")
    }
  });

  // delete to-do upon click, also remove from local storage
    // hover over text for option
  $("ul").on("click", "i.fa.fa-trash", function(e) { //has to be on ul for all new inputs to work as well
    $(this).parent().parent().fadeOut(function() { //parent is span, need to be li
      localStorage.removeItem($(this).text()) //retrieves key info from text on 'this' object which is currently li
      $(this).remove();
    })
  });

  // strikethrough to-do upon double clicking on text (use toggle to unstrikethrough) - had to use doubleclick due to issues with the 'mark important' icon functionality
  $("ul").on("dblclick", "li", function() { //specifying all li elements on ul will make event apply to any future new li's
    $(this).toggleClass("completedItem");
  });


  // mark important 
    // hover over text for this option
  $("ul").on("click", "i.fa.fa-exclamation", function(e) { //has to be on ul for all new inputs to work as well
    $(this).parent().parent().toggleClass("important")

  });

  // click on icon to open up canvas animation
  $("i.fa.fa-question-circle").on("click", function() {
    $("#myCanvas").show();
    $(".listBody").hide();
    $("i.fa.fa-list-ul").show();
  });

  //click on list icon to go back to to-do list
  $("i.fa.fa-list-ul").on("click", function() {
    $("#myCanvas").hide();
    $(".listBody").show();
    $("i.fa.fa-list-ul").hide();
  });

  // add corgi icon, if clicked, play "Friday" song (originally used toggleClass, but toggleClass didnt work. why not?)
  $(".corgi").on("click", function() {
    $(".friday").css("float", "right") //has to change css so it will display in the proper place
    $(".friday").show(); //use show instead of toggle because of css change
  });

  $(".corgi").on("dblclick", function() {
    $(".friday").hide(); //slow effect not working
  });

});



/* * * * * * * * * * * * * * * * * * * * * * * * * * * 
NOTES: Pushing an array or object into localStorage
* * * * * * * * * * * * * * * * * * * * * * * * * * * *

//Create a getter/setter 
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  return JSON.parse(this.getItem(key));
}
// create a class for the item input
var Item = function(name) {
  this.name;
}
create an empty array to push inputs into
var itemArr = [];

// JSON stringify array to push to localstorage and then parseJSON to retreive array info
localStorage.setItem(itemKey, JSON.stringify(itemArr))
var data = JSON.parse(localStorage.getItem(itemKey))

//add item to localStorage
var addItem = function(name) {
  var item = new Item(name)
  localStorage.setItem(itemKey, item) //itemKey is not defined
}

var itemKey = $(".user-input").val(); //not used...

// create an empty array to push inputs into
var itemArr = [];
// itemArr.push(itemKey)


* * * * * * * * * * * * * * * * * * * * * * * * * * * *
NOTES: Functionality to revisit...
* * * * * * * * * * * * * * * * * * * * * * * * * * * *

// input due date option - (add calendar feature)
  // connect moment.js
$(".due-date").keypress(function(e) {
  if (e.which === 13) {
    var date = $(".due-date").val()
  }
})

// automatically change date color as due date approaches
  // use moment.js to apply this feature
  // if (date < 5 days away) 
    // text color = red and bold

// add sound icon to play music
$(".some-sound-icon").on("click", function() {
  $(this).toggleClass("musicOn")
})

// toggle background
  // set up various background options on index.html page
  // create a toggle class for these backgrounds in app.css
  // set up an icon on html
    // on click- toggle class or look into sliders

// create layers of to-do's
  // create divs on index.html
  // append localStorage items to div currently used
    // how to make localStorage remember items on different divs?

// create function to add new to-do note
  // add a plus sign icon in index.html
  // on click plus sign icon
    // create new div note container and append to body

// insert calendar as main page, full screen - look into libraries
  // click on date
  // opens up to-do note functionalities
  // create a back button icon 
    // on click, takes back to calendar page

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
NOTES: Paper.js & CSS animation
* * * * * * * * * * * * * * * * * * * * * * * * * * * *

// create an icon to toggle animation options
  // create animations with paper.js

// WRONG ANIMATION LIBRARY TO USE FOR THIS APP....

// more research on html canvas element
  // so far, cannot make canvas transparent
  // if append canvas as background, it loses animation functionality

// figure out why I cannot put paper.js code in this file, currently on index.html page


*/ 

