document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showSignupLink = document.getElementById("show-signup");
  const showLoginLink = document.getElementById("show-login");
  const loginSection = document.getElementById("login-section");
  const signupSection = document.getElementById("signup-section");

  showSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginSection.style.display = "none";
    signupSection.style.display = "block";
  });

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupSection.style.display = "none";
    loginSection.style.display = "block";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you would typically send a request to your server to authenticate the user
    console.log(`Login attempt: ${username}, ${password}`);
    alert("Login functionality would be implemented here.");
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you would typically send a request to your server to create a new user
    console.log(`Signup attempt: ${username}, ${email}, ${password}`);
    alert("Signup functionality would be implemented here.");
  });

  // Open Source Concept - Displaying Interactive Tooltip
  const openSourceTooltip = document.getElementById("open-source-tooltip");
  document.getElementById("explore-open-source").addEventListener("mouseenter", () => {
    openSourceTooltip.style.display = "block";
  });
  document.getElementById("explore-open-source").addEventListener("mouseleave", () => {
    openSourceTooltip.style.display = "none";
  });

  // Quiz Functionality (Interactive Learning)
  const quizButton = document.getElementById("quiz-btn");
  quizButton.addEventListener("click", () => {
    const question = "What does 'Forking' a project in GitHub mean?";
    const options = ["A. Creating a copy of the project", "B. Reporting a bug", "C. Editing the code directly", "D. Merging two projects"];
    const userAnswer = prompt(`${question}\n\n${options.join("\n")}`);

    if (userAnswer && userAnswer.toUpperCase() === "A") {
      alert("Correct! Forking means creating a copy of the project to make changes.");
    } else {
      alert("Oops! The correct answer is A. Forking means creating a copy of the project.");
    }
  });
});
