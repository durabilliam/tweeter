/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
 console.log('client');
 



//Create Tweet Element from pseudo object database
const createTweetElement = function(tweet) {  
  let markup =`
  <article class="tweet-id">
  <header class="tweet-header">
    <div class="twopiece">
      <div class="user-image">
      <img src="${tweet.user.avatars}">
      </div>
      <div class="user-name">
      <span>"${tweet.user.name}"</span>
      </div>
    </div>  
    <div class="user-tweet">
      <span>"${tweet.content.text}"</span>
    </div>
    <div class="handle">
      <span>"${tweet.user.handle}"</span>
    </div>
  </header>
  <footer class=tweet-footer>
    <div>
      <span class="datetime" timeago.format(${tweet.created_at}); datetime="${tweet.created_at}">July 07, 2016</span>
      <!--<time class="time"></time>-->
    </div>
    <div class=corner>
      <span id=flag><i class="fas fa-flag"></i></span>
      <span id=retweet><i class="fas fa-retweet"></i></span>
      <span id=heart><i class="fas fa-heart"></i></span>
  </div>
  </footer>
</article>

  `
  return markup
}

//button and serialize data to send to tweet database
$("#submit").submit((evt) => {
  evt.preventDefault();

console.log("HERERERER",$("#tweet-text").val().length)
const newtweet = $("#tweet-text").val();
console.log("heahduxge:", newtweet)
if (newtweet.length > 140){
  alert("sorry your Tweet is over 140 Characters");
} else if (newtweet.length === 0){
  alert("sorry your Tweet is Empty");
} else {
 $.ajax({
     url: `/tweets`,
     method: 'POST',
     data: $(evt.target).serialize(),
     dataType: 'text',
   })
   .then(() => {console.log('successfully posted');
       loadTweets()});
  }
});


//Renders  the tweet elements
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
}

//Fetches Tweets from DataBase With Ajax
const loadTweets = function() {
  $.ajax({
      url: `/tweets`,
      method: 'GET',
      dataType: 'JSON'
  }).then(function(response) {
      $('#results').empty();
      console.log("jkhg", response);
      renderTweets(response);
  })
}
loadTweets();



});
