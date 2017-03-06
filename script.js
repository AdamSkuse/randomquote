var quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"];
var getQuoteButton = document.getElementById("getQuoteButton");
// getQuoteButton.addEventListener("click", displayNewQuote);
// 
// function displayNewQuote(){
//     var quoteDisplay = document.getElementById("quoteDisplay");
//     var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteDisplay.innerHTML = newQuote;
// }
// 
$(document).ready(function() {

    $("#getQuoteButton").on("click", function(){
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json) {
            console.log(JSON.stringify(json));
            console.log(json.quoteText);
            $("#quoteDisplay").html(json.quoteText);

    });
  });
});

