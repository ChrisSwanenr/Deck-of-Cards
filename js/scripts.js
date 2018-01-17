$(document).ready(function() {
  var suits = ["Clubs", "Spades", "Diamonds", "Hearts", ];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var cards = [];
  $('#button').click(function(){
    $("#button").slideToggle();
    $("#initial").text("BIG DECK DETECTED");
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
      cards.push(rank + " of " + suit);
      });
    });
    cards.forEach(function(card) {
      $(".result").append("<li>" + card + "</li>");
    });

  });
});
