document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  })

  const statsContainer = document.getElementById("stats-container")
  const featuredProjectCard = document.getElementById("featured-project-card")
  const newsletterForm = document.getElementById("newsletter-form")
  const newsletterMessage = document.getElementById("newsletter-message")

  // Simulated live statistics update
  function updateLiveStats() {
    if (statsContainer) {
      const activeUsers = Math.floor(Math.random() * 1000) + 500
      const openBounties = Math.floor(Math.random() * 100) + 50
      const totalRewards = Math.floor(Math.random() * 10000) + 5000

      const activeUsersElement = document.getElementById("active-users")
      const openBountiesElement = document.getElementById("open-bounties")
      const totalRewardsElement = document.getElementById("total-rewards")

      if (activeUsersElement) activeUsersElement.textContent = activeUsers.toLocaleString()
      if (openBountiesElement) openBountiesElement.textContent = openBounties.toLocaleString()
      if (totalRewardsElement) totalRewardsElement.textContent = `$${totalRewards.toLocaleString()}`
    }
  }

  // Update stats every 5 seconds
  updateLiveStats()
  setInterval(updateLiveStats, 5000)

  // Featured project data
  const featuredProjects = [
    { name: "EcoTrack", description: "Open-source environmental monitoring platform", progress: 75 },
    { name: "CodeMentor", description: "Peer-to-peer programming mentorship app", progress: 60 },
    { name: "DataViz", description: "Data visualization library for scientific research", progress: 90 },
  ]

  // Update featured project every 10 seconds
  function updateFeaturedProject() {
    if (featuredProjectCard) {
      const project = featuredProjects[Math.floor(Math.random() * featuredProjects.length)]
      featuredProjectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${project.progress}%"></div>
                </div>
                <p>Progress: ${project.progress}%</p>
            `
    }
  }

  updateFeaturedProject()
  setInterval(updateFeaturedProject, 10000)

  // Newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("newsletter-email").value

      // Simulate form submission
      if (newsletterMessage) {
        newsletterMessage.textContent = "Subscribing..."
        newsletterMessage.classList.add("loading")

        setTimeout(() => {
          newsletterMessage.classList.remove("loading")
          newsletterMessage.textContent = `Thank you for subscribing with email: ${email}`
          newsletterForm.reset()
        }, 2000)
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Update active navigation link based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll("nav ul li a")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active")
      }
    })
  })
})

