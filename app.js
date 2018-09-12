$(document).ready(function() { 
// create a class for the item input
var Item = function(name) {
  this.name;
}
// create an empty array to push inputs into
var itemArr = [];

//JSON stringify array to push to localstorage and then parseJSON to retreive array info
localStorage.setItem(itemKey, JSON.stringify(itemArr))
var data = JSON.parse(localStorage.getItem(itemKey))

var itemKey = $(".user-input").val(); //not used...


// function to display items from localStorage
var listItems = function() {
  var data = localStorage.getItem(itemKey)
  for(var i = 0; i < localStorage.length; i++) {
    $("ul").append("<li><span><i class ='fa fa-trash'></i></span>" + localStorage.key(i) + "<span><i class='fa fa-exclamation'></i></span></li>")
  }
}

//invoke function so that page always displays previous localStorage data
listItems(); 


//add item to localStorage
var addItem = function(name) {
  var item = new Item(name)
  // localStorage.setItem(itemKey, item) //itemKey is not defined
}


// input to-do, display on html, & store to local storage
$(".user-input").keypress(function(e) {
  if (e.which === 13) {
    // var item = new Item($(this).val()); //class instantiation //revisit, need to figure out how to pass into objects
    var itemKey = $(this).val()
    localStorage.setItem(itemKey, itemKey)
    // localStorage.setItem(itemKey, JSON.stringify(item)); //adds item to localStorage
    $(this).val(""); //resets the input value
    $("ul").append("<li><span><i class ='fa fa-trash'></i></span>" + itemKey + "<span><i class='fa fa-exclamation'></i></span></li>")
  }
})

// delete to-do upon click, also remove from local storage
  // hover over text for option
$("ul").on("click", "i.fa.fa-trash", function(e) { //has to be on ul for all new inputs to work as well
  $(this).parent().parent().fadeOut(function() { //parent is span, need to be li
    localStorage.removeItem($(this).text()) //retrieves key info from text on 'this' object
    $(this).remove();
  })
})

// strikethrough to-do upon clicking on text (use toggle to unstrikethrough)
$("ul").on("dblclick", "li", function() { //specifying all li elements on ul will make event apply to any future new li's
  $(this).toggleClass("completedItem");
});


// mark important 
  // hover over text for this option
$("ul").on("click", "i.fa.fa-exclamation", function(e) { //has to be on ul for all new inputs to work as well
  $(this).parent().parent().toggleClass("important")

})

// input due date option

// add sound icon to play music

// add corgi icon, if clicked, play "Friday" song

// if item object does not have "passport or id" - have meaningful error pop up to remind to bring id

// toggle background?

});