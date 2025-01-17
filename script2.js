const btn__surprise = document.querySelector(".btn__surprise");
console.log(btn__surprise); // Check if this logs the button element or `null`
btn__surprise?.addEventListener("click", () => {
  window.alert(
    "Another surprise!  You will find the real link at the bottom right corner of the page."
  );
});
