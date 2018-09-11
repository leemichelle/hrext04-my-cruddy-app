// $(document).ready(function() {
//   // Check off to-do's by clicking
//   $("ul").on("click", "li", function() { //specifying all li elements on ul will make event apply to any future new li's
//     $(this).toggleClass("completedItem");
//   });

//   let inputKeyValue = $("input[type='text']").val()

//   //Click on trash can to delete to-do
//   $("ul").on("click", "span", function(e) { //has to be on parent element, ul
//     $(this).parent().fadeOut(function(){
//       // localStorage.removeItem(inputKeyValue) //not work
//       $(this).remove();
//     })
//     e.stopPropagation(); //span is inside li so any li event will be triggered too
//   });

//   $("input[type='text']").keypress(function(e){
//     if(e.which === 13) { //enter key is number 13, .which checks for which button was pressed
//       var toDo = $(this).val();
//       localStorage.setItem(toDo, toDo)
//       $(this).val(""); //resets input area each time
//       $("ul").append("<li><span><i class ='fa fa-trash'></i></span><span><i class='fa fa-exclamation'></i></span> " + toDo + "</li>")
//     }
//   });

// });


/*
  $("body").css()

  *(7) different pages for different "to-do's"
  *(8?) pick different background for each page(grocery store background, travel background, general paper background)
      getAttribute, setAttribute
  *(5) add option for due date
  *(7) time stamp (days left until event if list has due date)
  *(3) strikethrough when completed task (and maybe move completed task to bottom of list?)
      -use toggle to strikethrough and unstrikethrough if user wants to undo
  *(8) secret corgi functionality (it's a secret so I can't reveal much)
  *(3) mark important "to-do"
  *(7) show deleted items and allow for undelete
  *(5) ability to select and delete multiple items (have a delete checkbox and master delete icon)

Make object to add different pages with method to create different background for each page 


*/



// $(document).ready(function() {

//   $(".add-text-btn").on("click", function(){

//     // store values
//     let inputKey = $(".user-input-key").val();
//     let inputValue = $(".user-input-value").val();

//     // clear values
//     $(".user-input-key").val("");
//     $(".user-input-value").val("");

//     // console.log(inputKey, inputValue);

//     localStorage.setItem(inputKey, inputValue);
//     // data-
//     let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
//     $(".display").html(itemHtml);
//     //console.log(localStorage);
//     // how can we delegate this event to the outer html node?
//     // https://learn.jquery.com/events/event-delegation/

//     $(".display-item").on("click", function(e){
//       // plop the key:value back into the input boxes

//       // get the values from the the divs?
//       // console.log("key=> ", e.target.dataset.storageKey); // user-input-key
//       localStorage.getItem(e.target.dataset.storageKey); // user-input-value

//       // set those values in the form fields
//       $(".user-input-key").val(e.target.dataset.storageKey);
//       $(".user-input-value").val(localStorage.getItem(e.target.dataset.storageKey));
//     });

//   });



//    // TODO add back in later
//    // $(".user-input").on("keyup", function(){
//    //   let inputValue = $(".user-input").val();
//    //   localStorage.setItem("testStorage", inputValue);
//    //   $(".display").text(localStorage.getItem("testStorage"));
//    // });

//    $(".del-text-btn").on("click", function() {
//      alert('item deleted? check the console'); // maybe change to a window.confirm
//      localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
//      $(".user-input-title").val("");
//      $(".user-input-body").val("");
//      // clearing display? what if I have multiple items?
//      // after item is removed from local storage, redisplay items from local storage
//      // refresh from storage?
//    });


//    // iterative approach to adding items
//    // store data as stringified array of objects
//    // store data with individual keys
//   // how do we get keys? research Object.keys



// });