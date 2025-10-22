const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  successMsg.hidden = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  document.querySelectorAll("small").forEach((el) => (el.textContent = ""));

  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Full name is required";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("error-email").textContent =
      "Enter a valid email address";
    valid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent =
      "Subject is required";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent =
      "Message must be at least 10 characters";
    valid = false;
  }

  if (valid) {
    successMsg.hidden = false;
    form.reset();
  }
});
