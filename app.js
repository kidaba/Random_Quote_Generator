var quote = [
  "Success is a lousy teacher. It seduces smart people into thinking they can lose",
  "If history has taught us anything it's we humans are capable of anything",
  "Suceess is never final, failure is never fatal. It's courage that counts",
  "To succeed in life you need two things, ignorance and confidence",
  "Sometimes it's the smallest decisions that can change your life forever",
  "Lost time is never found again",
  "Love is an emotion experienced by the many and enjoyed by the few",
  "It's not a lack of love, but a lack of friendship that makes unhappy marriages"
];

var author = [
  "Bill Gates",
  "Simon Allardice",
  "John Wooden",
  "Mark T. Wain",
  "Keri Russell",
  "Benjamin Franklin",
  "George Jean Nathan",
  "Friedrich Nietzsche"
];

function quoteGenerator () {
  var randomQuote = Math.floor((Math.random() * quote.length));

  var quoteGen = quote[randomQuote];
  var authorGen = author[randomQuote];

  var quoteText = document.getElementById('quote');
  quoteText.innerHTML = quoteGen;

  var authorText = document.getElementById('author');
  authorText.innerHTML = authorGen;
}
