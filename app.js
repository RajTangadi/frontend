const quotes = [
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },

  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },

  {
    quote:
      "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
    author: "Michael Jordan",
  },

  {
    quote:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },

  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },

  {
    quote: "Only the paranoid survive",
    author: "Andy Grove",
  },

  {
    quote:
      "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.",
    author: "Leah Busque",
  },

  {
    quote:
      "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author: "carl john",
  },

  {
    quote:
      "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    author: "Joss Whedon",
  },

  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    author: "Marilyn Monroe",
  },

  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },

  {
    quote: "So many books, so little time",
    author: "Frank Zappa",
  },

  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },

  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },

  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: " Dr. Seuss",
  },

  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },

  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },

  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },

  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },

  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },

  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },

  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: " Oscar Wilde",
  },

  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },

  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },

  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever",
    author: "Mahatma Gandhi",
  },

  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results",
    author: "Narcotics Anonymous ",
  },

  {
    quote: "Tears are words that need to be written.",
    author: "Paulo Coelho",
  },

  {
    quote: "You cannot find peace by avoiding life.",
    author: "Virginia Woolf",
  },

  {
    quote:
      "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
  },

  {
    quote: "One day I will find the right words, and they will be simple",
    author: "Jack Kerouac",
  },

  {
    quote: "You can always edit a bad page. You can't edit a blank page.",
    author: "Jodi Picoult",
  },
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length + 1);

  let quote = quotes[random];

  return quote;
}

//Function to select random rgb color value
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
function printQuote() {
  let quotes = getRandomQuote();
  let text = document.getElementById("text");

  let author = document.getElementById("author");

  let final = quotes.quote;
  let finale = quotes.author;
  author.innerText = finale;
  text.innerText = final;

  //assigns random color value to document background color

  document.querySelector(".container").style.backgroundColor = getRandomColor();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function () {
  printQuote();
}, 15000);

//Event listener on LoadQuote button to generate new quote
document
  .getElementById("randomQuote")
  .addEventListener("click", printQuote, false);

//! let randomNumber = Math.floor((Math.random() * 100) + 1);   // 1 to 100 random values
