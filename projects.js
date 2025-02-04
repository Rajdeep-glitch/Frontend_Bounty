document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const statsContainer = document.getElementById("stats-container");

  const projects = [
    {
      title: "EcoTrack",
      description: "Environmental monitoring platform",
      category: "web",
      contributors: 15,
      stars: 120,
      bounty: 50, // Bounty amount
    },
    { title: "MobileWallet", description: "Secure mobile payment app", category: "mobile", contributors: 8, stars: 75, bounty: 30 },
    { title: "AIAssistant", description: "Conversational AI assistant", category: "ai", contributors: 12, stars: 200, bounty: 100 },
    { title: "DataViz", description: "Data visualization library", category: "data", contributors: 20, stars: 180, bounty: 60 },
    {
      title: "CloudSync",
      description: "Cloud storage synchronization tool",
      category: "web",
      contributors: 10,
      stars: 90,
      bounty: 40,
    },
    {
      title: "ARNavigator",
      description: "Augmented reality navigation app",
      category: "mobile",
      contributors: 6,
      stars: 60,
      bounty: 25,
    },
    {
      title: "MLPredictor",
      description: "Machine learning prediction model",
      category: "ai",
      contributors: 18,
      stars: 150,
      bounty: 70,
    },
    {
      title: "BigDataAnalyzer",
      description: "Big data analysis toolkit",
      category: "data",
      contributors: 25,
      stars: 220,
      bounty: 120,
    },
  ];

  function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("card", "project-item");
    card.dataset.category = project.category;
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p>Category: <span class="tag">${project.category}</span></p>
      <p>Contributors: ${project.contributors}</p>
      <p>Stars: ${project.stars}</p>
      <p>Bounty: $${project.bounty}</p>
      <a href="#" class="btn">View Project</a>
      <button class="claim-bounty-btn">Claim Bounty</button>
    `;
    const bountyBtn = card.querySelector(".claim-bounty-btn");
    bountyBtn.addEventListener("click", () => {
      alert(`You have claimed the bounty of $${project.bounty} for this project!`);
    });
    return card;
  }

  function populateProjects(projectsToShow) {
    projectList.innerHTML = "";
    projectsToShow.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectList.appendChild(projectCard);
    });
  }

  function filterProjects(filter) {
    if (filter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === filter);
  }

  function updateStats() {
    const totalProjects = projects.length;
    const totalContributors = projects.reduce((sum, project) => sum + project.contributors, 0);
    const totalStars = projects.reduce((sum, project) => sum + project.stars, 0);
    const totalBounty = projects.reduce((sum, project) => sum + project.bounty, 0);

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
      <div class="stat-card">
        <h3>Total Bounty Value</h3>
        <p>$${totalBounty}</p>
      </div>
    `;
  }

  // Initial population of projects and stats
  populateProjects(projects);
  updateStats();

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.category.toLowerCase().includes(searchTerm)
    );
    populateProjects(filteredProjects);
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      const filteredProjects = filterProjects(filter);
      populateProjects(filteredProjects);
    });
  });

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });
});
