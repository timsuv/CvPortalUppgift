const burgerNav = document.getElementById("burgerNav");
const burgerToggleBtn = document.getElementById("toggleBurger");

burgerToggleBtn.addEventListener("click", () => {
  burgerNav.classList.toggle("active");
});

const jsBtn = document.querySelector(".jsBtn");
jsBtn.addEventListener("click", () => {
  window.location.href = "surprise.html";
});

const easterEgg = document.querySelector(".easterEgg");
easterEgg.addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
  about.style.backgroundColor = "blue";
  cv.style.backgroundColor = "pink";
  portfolio.style.backgroundColor = "blue";
  contact.style.backgroundColor = "pink";
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("email").value;

  if (input.includes("gmail")) {
    window.alert("Good job, you found the easter egg! The mail should be gmail.");
  } else {
    window.alert("Form failed to submit! We only accept google emails.");
  }
});
