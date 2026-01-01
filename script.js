const HER_NAME = "Riya";

/* Messages */
const morningText =
`${HER_NAME} ❤️
Good morning meri jaan 🌸
Aaj thoda theek feel nahi kar rahi ho, ye soch ke dil heavy ho gaya.
Please rest lo, warm water piyo aur medicine time pe lena.
Main hamesha tumhare saath hoon ❤`;

const nightText =
`${HER_NAME} ❤️
Good night meri jaan 🌙
Aaj ka din thoda tough tha, par please tension mat lo.
Araam se so jao, khud ka khayal rakho.
Sapno mein bhi main tumhare saath hoon ❤`;

let i = 0;
let currentText = morningText;
const speed = 30;
const msg = document.getElementById("message");

/* Typing Effect */
function typeText() {
  if (i < currentText.length) {
    msg.innerHTML += currentText.charAt(i) === "\n" ? "<br>" : currentText.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

function resetText(text) {
  i = 0;
  currentText = text;
  msg.innerHTML = "";
  typeText();
}

/* Modes */
function setMorning() {
  document.body.className = "day";
  document.getElementById("title").innerText = "Good Morning 🌸";
  resetText(morningText);
}

function setNight() {
  document.body.className = "night";
  document.getElementById("title").innerText = "Good Night 🌙";
  resetText(nightText);
}

/* Button Response */
function sendLove() {
  document.getElementById("response").style.display = "block";
}

/* Floating Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);

/* Start with Morning */
resetText(morningText);