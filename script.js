// Floating emoji hearts generator
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("emoji-heart");
  heart.textContent = "🤍";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.animationDuration = Math.random() * 4 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createFloatingHeart, 400);

// Screens
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const roseBtn = document.getElementById("roseBtn");
const cuteText = document.getElementById("cuteText");
const takeBtn = document.getElementById("takeBtn");
const letterText = document.getElementById("letterText");
const whoBtn = document.getElementById("whoBtn");
const finalTyping = document.getElementById("finalTyping");

// Rose click
roseBtn.addEventListener("click", () => {
  cuteText.style.opacity = "1";
  cuteText.style.transform = "translateY(0)";
  setTimeout(() => takeBtn.classList.add("show"), 600);
});

// Go to screen 2
takeBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  typeLetter();
});

// Letter content
const letterContent =
  "This rose… I wanted to give it to you,\n" +
  "because you are a little fighter who studies with effort and care.\n" +
  "You truly deserve it, rose 💕\n" +
  "schatze";

// Typing effect
function typeLetter() {
  let i = 0;
  const speed = 55;

  const interval = setInterval(() => {
    if (i < letterContent.length) {
      letterText.textContent += letterContent.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      whoBtn.classList.add("show");
      whoBtn.classList.remove("hidden");
    }
  }, speed);
}

// Go to screen 3
whoBtn.addEventListener("click", () => {
  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
  typeFinal();
});

// Final text typing
const finalMessage = "The most beautiful architectural engineer";

function typeFinal() {
  let i = 0;
  const speed = 70;

  const interval = setInterval(() => {
    if (i < finalMessage.length) {
      finalTyping.textContent += finalMessage.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
