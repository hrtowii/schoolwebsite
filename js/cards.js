const toggleModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal.style.display === '') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
};

var subtitle = document.getElementsByClassName("card-subtitle")[0];
var createWord = (text, index) => {
  var word = document.createElement("span");
  word.innerHTML = `${text}`;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}


// code that adds to the card subtitle text. repeated 4 times for each card (this is very inefficient)
var addWord = (text, index) => subtitle.appendChild(createWord(text, index));
var createSubtitle = text => text.split(" ").map(addWord);
createSubtitle("Created with others during Hack & Roll 2023. Timer app for brewing hard-to-brew coffees (V20, Aeropress)", 0);

var subtitle = document.getElementsByClassName("card-subtitle")[1];
var createWord = (text, index) => {
  var word = document.createElement("span");
  word.innerHTML = `${text}`;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

var addWord = (text, index) => subtitle.appendChild(createWord(text, index));
var createSubtitle = text => text.split(" ").map(addWord);
createSubtitle("Team submission for GeekOut 2023 that won 3rd place. Centralised LMS system for JC (Holy Grail for lectures + flashcards and data visualisation)", 0);

var subtitle = document.getElementsByClassName("card-subtitle")[2];
var createWord = (text, index) => {
  var word = document.createElement("span");
  word.innerHTML = `${text}`;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 30}ms`;
  return word;
}

var addWord = (text, index) => subtitle.appendChild(createWord(text, index));
var createSubtitle = text => text.split(" ").map(addWord);
createSubtitle("Created with others during LCH 2022. Geoguessr clone with an uncanny meme.", 0);

var subtitle = document.getElementsByClassName("card-subtitle")[3];
var createWord = (text, index) => {
  var word = document.createElement("span");
  word.innerHTML = `${text}`;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}
var addWord = (text, index) => subtitle.appendChild(createWord(text, index));
var createSubtitle = text => text.split(" ").map(addWord);
createSubtitle("Created for a school project in NYP.", 0);