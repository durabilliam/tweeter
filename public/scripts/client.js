/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
 console.log('client');
 
// $("#btn").on('click', function() {
//   console.log(this);
// });

// const $tweet = $(`<article class="tweet">Hello world</article>`);
// console.log($tweet);

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
//Create Tweet Element from pseudo obkect database
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

//Renders  the tweet elements
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
}


renderTweets(data);

});
