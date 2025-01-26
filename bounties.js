document.addEventListener("DOMContentLoaded", () => {
  const bountyList = document.getElementById("bounty-list")
  const searchInput = document.getElementById("search-input")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const statsContainer = document.getElementById("stats-container")
  const featuredBountyCard = document.getElementById("featured-bounty-card")

  const bounties = [
    { title: "Implement user authentication", reward: "$200", difficulty: "Medium", progress: 60 },
    { title: "Optimize database queries", reward: "$150", difficulty: "Hard", progress: 10 },
    { title: "Add dark mode support", reward: "$100", difficulty: "Medium", progress: 80 },
    { title: "Create mobile responsive layout", reward: "$180", difficulty: "Medium", progress: 40 },
    { title: "Implement search functionality", reward: "$120", difficulty: "Easy", progress: 70 },
    { title: "Fix CSS bug in navigation", reward: "$50", difficulty: "Easy", progress: 30 },
  ]

  function createBountyCard(bounty) {
    const card = document.createElement("div")
    card.classList.add("card", "bounty-item", "dynamic-element")
    card.dataset.difficulty = bounty.difficulty.toLowerCase()
    card.innerHTML = `
            <h3>${bounty.title}</h3>
            <p>Reward: ${bounty.reward}</p>
            <p>Difficulty: <span class="tag">${bounty.difficulty}</span></p>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${bounty.progress}%"></div>
            </div>
            <p>Progress: ${bounty.progress}%</p>
            <button class="btn claim-bounty">Claim Bounty</button>
        `
    return card
  }

  function populateBounties(bountiesToShow) {
    bountyList.innerHTML = ""
    bountiesToShow.forEach((bounty) => {
      const bountyCard = createBountyCard(bounty)
      bountyList.appendChild(bountyCard)
    })
  }

  function filterBounties(filter) {
    if (filter === "all") {
      return bounties
    }
    return bounties.filter((bounty) => bounty.difficulty.toLowerCase() === filter)
  }

  function updateStats() {
    const totalBounties = bounties.length
    const totalReward = bounties.reduce((sum, bounty) => sum + Number.parseInt(bounty.reward.slice(1)), 0)
    const averageProgress = Math.round(bounties.reduce((sum, bounty) => sum + bounty.progress, 0) / totalBounties)

    statsContainer.innerHTML = `
            <div class="card dynamic-element">
                <h3>Total Bounties</h3>
                <p>${totalBounties}</p>
            </div>
            <div class="card dynamic-element">
                <h3>Total Reward</h3>
                <p>$${totalReward}</p>
            </div>
            <div class="card dynamic-element">
                <h3>Average Progress</h3>
                <p>${averageProgress}%</p>
            </div>
        `
  }

  function updateFeaturedBounty() {
    const featuredBounty = bounties[Math.floor(Math.random() * bounties.length)]
    featuredBountyCard.innerHTML = `
            <h3>${featuredBounty.title}</h3>
            <p>Reward: ${featuredBounty.reward}</p>
            <p>Difficulty: <span class="tag">${featuredBounty.difficulty}</span></p>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${featuredBounty.progress}%"></div>
            </div>
            <p>Progress: ${featuredBounty.progress}%</p>
            <button class="btn claim-bounty">Claim Featured Bounty</button>
        `
  }

  // Initial population of bounties, stats, and featured bounty
  populateBounties(bounties)
  updateStats()
  updateFeaturedBounty()

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredBounties = bounties.filter(
      (bounty) =>
        bounty.title.toLowerCase().includes(searchTerm) || bounty.difficulty.toLowerCase().includes(searchTerm),
    )
    populateBounties(filteredBounties)
  })

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      const filter = button.dataset.filter
      const filteredBounties = filterBounties(filter)
      populateBounties(filteredBounties)
    })
  })

  // Claim bounty functionality
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("claim-bounty")) {
      const bountyCard = e.target.closest(".card")
      const bountyTitle = bountyCard.querySelector("h3").textContent
      alert(`You've claimed the bounty: ${bountyTitle}`)
    }
  })

  // Update featured bounty every 30 seconds
  setInterval(updateFeaturedBounty, 30000)

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  })
})

