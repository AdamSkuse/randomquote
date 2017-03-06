var quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"];
var getQuoteButton = document.getElementById("getQuoteButton");
getQuoteButton.addEventListener("click", displayNewQuote);

function displayNewQuote(){
    var quoteDisplay = document.getElementById("quoteDisplay");
    var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = newQuote;
}

