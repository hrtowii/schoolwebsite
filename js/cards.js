const toggleModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal.style.display === '' || modal.style.display === 'none') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
};

function createSubtitleCard(index, text, delay) {
  var subtitle = document.getElementsByClassName("card-subtitle")[index];
  
  var createWord = (text, index) => {
    var word = document.createElement("span");
    word.innerHTML = `${text}`;
    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = `${index * delay}ms`;
    return word;
  }

  var addWord = (text, index) => subtitle.appendChild(createWord(text, index));
  var createSubtitle = text => text.split(" ").map(addWord);
  createSubtitle(text);
}

createSubtitleCard(0, "Created with others during Hack & Roll 2023. Timer app for brewing hard-to-brew coffees (V20, Aeropress)", 40);
createSubtitleCard(1, "Team submission for GeekOut 2023 that won 3rd place. Centralised LMS system for JC (Holy Grail for lectures + flashcards and data visualisation)", 40);
createSubtitleCard(2, "Created with others during LCH 2022. Geoguessr clone with an uncanny meme.", 30);
createSubtitleCard(3, "Created for a school project in NYP.", 40);
