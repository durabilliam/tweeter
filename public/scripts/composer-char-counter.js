$(document).ready(function() {
  // --- our code goes here ---

// listen and count ketstrokes of tweets

$("#tweet-text").on("input", function() {
  //evt.preventDefault();
  // To move up the parent and children elements with JQuery
  let counter = $(this).parent().parent().children().children("output");
  // Keystroke Count
  let charCount = $(this).val().length
  // 
    counter.text(140 - charCount);
  if ((140 - charCount) < 0){
    counter.css("color", "red")
  } else {
    counter.css("color", '#545149')
  }
 }); 



});


