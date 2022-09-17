const button = document.getElementById("getRandomEmoji");
const emojiSpan = document.getElementById("emoji");

const updateCurrentEmoji = (emoji) => {
  emojiSpan.innerHTML = emoji.htmlCode[0];
};

const getRandomEmoji = () => {
  fetch("https://emojihub.herokuapp.com/api/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      updateCurrentEmoji(data);
    });
};

// acelasi lucru, dar cu:
// async / await
// mod de scriere "sincron" - instructiunile sunt una dupa alta, mai usor de citit si inteles
const getRandomEmojiAsyncAwait = async () => {
  const response = await fetch("https://emojihub.herokuapp.com/api/random");
  const data = await response.json();

  updateCurrentEmoji(data);
};

button.addEventListener("click", () => {
  getRandomEmoji();
});

// functie pentru asteptare
const waitFor = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const waitForNumber = async (limit) => {
  for (let seconds = 1; seconds <= limit; seconds++) {
    console.time("timer");
    await waitFor(seconds);
    console.timeEnd("timer");
  }
};

waitForNumber(10);
