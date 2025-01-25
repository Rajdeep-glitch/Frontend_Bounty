document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list")
    const searchInput = document.getElementById("search-input")
    const filterButtons = document.querySelectorAll(".filter-btn")
    const statsContainer = document.getElementById("stats-container")
  
    const projects = [
      {
        title: "EcoTrack",
        description: "Environmental monitoring platform",
        category: "web",
        contributors: 15,
        stars: 120,
      },
      { title: "MobileWallet", description: "Secure mobile payment app", category: "mobile", contributors: 8, stars: 75 },
      { title: "AIAssistant", description: "Conversational AI assistant", category: "ai", contributors: 12, stars: 200 },
      { title: "DataViz", description: "Data visualization library", category: "data", contributors: 20, stars: 180 },
      {
        title: "CloudSync",
        description: "Cloud storage synchronization tool",
        category: "web",
        contributors: 10,
        stars: 90,
      },
      {
        title: "ARNavigator",
        description: "Augmented reality navigation app",
        category: "mobile",
        contributors: 6,
        stars: 60,
      },
      {
        title: "MLPredictor",
        description: "Machine learning prediction model",
        category: "ai",
        contributors: 18,
        stars: 150,
      },
      {
        title: "BigDataAnalyzer",
        description: "Big data analysis toolkit",
        category: "data",
        contributors: 25,
        stars: 220,
      },
    ]
  
    function createProjectCard(project) {
      const card = document.createElement("div")
      card.classList.add("card", "project-item")
      card.dataset.category = project.category
      card.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <p>Category: <span class="tag">${project.category}</span></p>
              <p>Contributors: ${project.contributors}</p>
              <p>Stars: ${project.stars}</p>
              <a href="#" class="btn">View Project</a>
          `
      return card
    }
  
    function populateProjects(projectsToShow) {
      projectList.innerHTML = ""
      projectsToShow.forEach((project) => {
        const projectCard = createProjectCard(project)
        projectList.appendChild(projectCard)
      })
    }
  
    function filterProjects(filter) {
      if (filter === "all") {
        return projects
      }
      return projects.filter((project) => project.category === filter)
    }
  
    function updateStats() {
      const totalProjects = projects.length
      const totalContributors = projects.reduce((sum, project) => sum + project.contributors, 0)
      const totalStars = projects.reduce((sum, project) => sum + project.stars, 0)
  
      statsContainer.innerHTML = `
              <div class="stat-card">
                  <h3>Total Projects</h3>
                  <p>${totalProjects}</p>
              </div>
              <div class="stat-card">
                  <h3>Total Contributors</h3>
                  <p>${totalContributors}</p>
              </div>
              <div class="stat-card">
                  <h3>Total Stars</h3>
                  <p>${totalStars}</p>
              </div>
          `
    }
  
    // Initial population of projects and stats
    populateProjects(projects)
    updateStats()
  
    // Search functionality
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase()
      const filteredProjects = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.category.toLowerCase().includes(searchTerm),
      )
      populateProjects(filteredProjects)
    })
  
    // Filter functionality
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
        const filter = button.dataset.filter
        const filteredProjects = filterProjects(filter)
        populateProjects(filteredProjects)
      })
    })
  
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    })
  })
  
  