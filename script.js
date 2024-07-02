function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = ["Web Developer", "Video Editor", "Programmer", "Gamer"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 100; // Adjust typing speed
const erasingSpeed = 100; // Adjust erasing speed
const delayBetweenWords = 850; // Delay between words

function type() {
  if (currentCharIndex < words[currentWordIndex].length) {
    typewriterElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typewriterElement.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the typing animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetweenWords);
});

