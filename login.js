document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")
  const signupForm = document.getElementById("signup-form")
  const showSignupLink = document.getElementById("show-signup")
  const showLoginLink = document.getElementById("show-login")
  const loginSection = document.getElementById("login-section")
  const signupSection = document.getElementById("signup-section")

  showSignupLink.addEventListener("click", (e) => {
    e.preventDefault()
    loginSection.style.display = "none"
    signupSection.style.display = "block"
  })

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault()
    signupSection.style.display = "none"
    loginSection.style.display = "block"
  })

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // Here you would typically send a request to your server to authenticate the user
    console.log(`Login attempt: ${username}, ${password}`)
    alert("Login functionality would be implemented here.")
  })

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("signup-username").value
    const email = document.getElementById("signup-email").value
    const password = document.getElementById("signup-password").value
    const confirmPassword = document.getElementById("signup-confirm-password").value

    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // Here you would typically send a request to your server to create a new user
    console.log(`Signup attempt: ${username}, ${email}, ${password}`)
    alert("Signup functionality would be implemented here.")
  })
})

