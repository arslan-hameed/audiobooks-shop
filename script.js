document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
  });
});
// subscribeForm
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const formMessage = document.getElementById("formMessage");

    if (email.includes("@") && email.includes(".")) {
      formMessage.textContent = "Thank you for subscribing!";
      formMessage.style.color = "green";
    } else {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
    }
  });
// subscribeForm

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const website = document.getElementById("website").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || company === "" || website === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Registration successful!";
    formMessage.style.color = "green";

    // Clear form fields
    document.getElementById("registrationForm").reset();
  });
