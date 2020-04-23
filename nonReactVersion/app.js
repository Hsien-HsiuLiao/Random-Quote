$(document).ready(function() {
  var quotes = [{quote:"Walk as if you are kissing the Earth with your feet." , author:"Thich Nhat Hanh"},{quote:"Zen lives in the present. The Whole teaching is: how to be in the present; how to get out of the past which is no more and how not to get involved in the future which is not yet, and just to be rooted, centered, in that which is.", author:"- Osho, Zen: The Path of Paradox"},{quote:"Zen opens a man&#39;s eyes to the greatest mystery as it is daily and hourly performed; it enlarges the heart to embrace eternity of time and infinity of space in its every palpitation; it makes us live in the world as if walking in the garden of Eden", author:"D. T. Suzuki"},{quote:"Zen in it&#39;s essence is the art of seeing into the nature of one&#39;s being, and it points the way from bondage to freedom", author:"D.T.Suzuki"}];

//https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
  var ranquote="";
   var author="";
  var num=0;
  
  function randomQuote() {
   
    ranquote=quotes[num].quote;
    author=quotes[num].author;
   $("#text").html(ranquote);
    $("#author").html(author);
    $("#div-tweet").html("<a id=tweet-quote href='https://twitter.com/intent/tweet?&text="+ encodeURIComponent(ranquote) +" - "+author+"' target=_blank>Tweet Quote</a>");
  
}

  randomQuote();
    
  $("#new-quote").on("click", function(){
      num=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      randomQuote();
    
    });
  });
