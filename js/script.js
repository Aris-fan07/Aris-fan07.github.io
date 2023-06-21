// script.js

// Scroll smooth effect for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Sample code for handling form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform form validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Submit form data to server
  // You can use AJAX or any other method here

  // Display success message
  alert("Thank you! Your message has been sent.");
  // Reset form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
