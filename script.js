const email = document.getElementById("email");
const signupCard = document.querySelector(".signup-card");
const submitBtn = document.querySelector(".submit-btn");
const successCard = document.querySelector(".success-card");
const successBtn = document.querySelector(".success-btn");
const errorMsgEmailRequired = document.querySelector(".error-msg-required");
const errorMsgEmailFormat = document.querySelector(".error-msg-email-format");

const userEmail = document.querySelector(".user-email");
let userInput;

const emailValidation = (email) => {
  return /[\w.\-]+@[\w\-]+\.[\w.\-]+/.test(email);
};

email.addEventListener("change", (e) => {
  e.preventDefault();
  userInput = email.value.trim();
  // Check the email validation
  email.classList.remove("error");
  errorMsgEmailFormat.style.display = "none";
  errorMsgEmailRequired.style.display = "none";
});

// Sing up card
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userInput = email.value.trim();
  // Check the email validation
  if (userInput === "") {
    email.classList.add("error");
    errorMsgEmailFormat.style.display = "none";
    errorMsgEmailRequired.style.display = "block";
    submitBtn.classList.remove("button-active");
  } else if (!emailValidation(userInput)) {
    email.classList.add("error");
    errorMsgEmailRequired.style.display = "none";
    errorMsgEmailFormat.style.display = "block";
    submitBtn.classList.remove("button-active");
  } else {
    email.classList.remove("error");
    errorMsgEmailFormat.style.display = "none";
    errorMsgEmailRequired.style.display = "none";
    userEmail.innerHTML = userInput;
    submitBtn.innerHTML = `<div class="loading"></div>`;
    submitBtn.classList.add("button-active");
    setTimeout(() => {
      submitBtn.innerHTML = "Subscribe to monthly newsletter";
      signupCard.style.display = "none";
      successCard.style.display = "flex";
      submitBtn.classList.remove("button-active");
    }, 3000);
  }
});

// Success card
successBtn.addEventListener("click", (e) => {
  e.preventDefault();
  successCard.style.display = "none";
  signupCard.style.display = "flex";
  userEmail.innerHTML = "";
});
