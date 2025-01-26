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
  const header = document.getElementById("main-header")

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

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 50
      const sectionId = section.getAttribute("id")

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href").includes(sectionId)) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", updateActiveNavLink)

  // Add scroll event listener for header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Fade in elements as they come into view
  const fadeElements = document.querySelectorAll(".fade-in")
  const fadeOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, fadeOptions)

  fadeElements.forEach((element) => {
    fadeObserver.observe(element)
  })

  // Page transition effect
  const pageTransition = document.querySelector(".page-transition")

  function startPageTransition() {
    pageTransition.classList.add("active")
  }

  function endPageTransition() {
    pageTransition.classList.remove("active")
  }

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.hostname === window.location.hostname) {
        e.preventDefault()
        const href = link.getAttribute("href")
        startPageTransition()
        setTimeout(() => {
          window.location.href = href
        }, 500)
      }
    })
  })

  window.addEventListener("pageshow", endPageTransition)
})

