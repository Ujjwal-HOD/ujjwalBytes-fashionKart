const words = [
  "Style Destination",
  "Trend Spot",
  "Fashion Fix",
  "Wardrobe Haven",
];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);
  typedText.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();

const showMoreBtn = document.getElementById("showMoreBtn");
const extraProducts = document.querySelectorAll(".extra-product");

showMoreBtn.addEventListener("click", () => {
  extraProducts.forEach((product) => {
    product.classList.toggle("hidden");
  });

  // Toggle button text
  if (showMoreBtn.innerText === "Show More") {
    showMoreBtn.innerText = "Show Less";
  } else {
    showMoreBtn.innerText = "Show More";
  }
});

//  for the seach btn java script

const searchIcon = document.querySelector(".fa-magnifying-glass");
const userIcon = document.querySelector(".fa-user");
const shopNowBtn = document.querySelector(".btn"); // first button
const searchBox = document.getElementById("searchBox");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

// Toggle Search Box
searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
});

// Show Login Popup on user icon click
userIcon.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
});

// Show Login Popup on "Shop Now" click
shopNowBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent page jump
  loginPopup.classList.remove("hidden");
});

// Close Login Popup
closeLogin.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});
