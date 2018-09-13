$(document).ready(function() { 

// click on icon to open up canvas animation
$("i.fa.fa-question-circle").on("click", function() {
  $("#myCanvas").show();
  $(".listBody").hide();
  $("i.fa.fa-list-ul").show();
})

//click on list icon to go back to to-do list
$("i.fa.fa-list-ul").on("click", function() {
  $("#myCanvas").hide();
  $(".listBody").show();
  $("i.fa.fa-list-ul").hide();
})

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
// create an empty array to push inputs into
// var itemArr = [];

//JSON stringify array to push to localstorage and then parseJSON to retreive array info
// localStorage.setItem(itemKey, JSON.stringify(itemArr))
// var data = JSON.parse(localStorage.getItem(itemKey))

var itemKey = $(".user-input").val(); //not used...

// create an empty array to push inputs into
var itemArr = [];
// itemArr.push(itemKey)


// function to display items from localStorage
var listItems = function() {
  // var data = localStorage.getItem(itemKey)
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
    itemArr.push(itemKey)
    console.log(itemArr)
    localStorage.setItem(itemKey, itemKey) //do localStorage.setItem(itemKey, JSON.stringify(itemArr))
    // localStorage.setItem(itemKey, JSON.stringify(itemArr)); //adds item to localStorage
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
$(".corgi").on("click", function() {
  $(".friday").css("float", "right")
  $(".friday").show(); //why toggleClass not work?
})

$(".corgi").on("dblclick", function() {
  $(".friday").hide(); //why toggleClass not work?
})


// toggle background?

});