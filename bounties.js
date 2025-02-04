document.addEventListener("DOMContentLoaded", () => {
  const bountyList = document.getElementById("bounty-list");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const statsContainer = document.getElementById("stats-container");
  const activityList = document.getElementById("activity-list");

  const bounties = [
    { title: "Implement user authentication", reward: "$200", difficulty: "Medium", progress: 60 },
    { title: "Optimize database queries", reward: "$150", difficulty: "Hard", progress: 10 },
    { title: "Add dark mode support", reward: "$100", difficulty: "Medium", progress: 80 },
    { title: "Create mobile responsive layout", reward: "$180", difficulty: "Medium", progress: 40 },
    { title: "Implement search functionality", reward: "$120", difficulty: "Easy", progress: 70 },
    { title: "Fix CSS bug in navigation", reward: "$50", difficulty: "Easy", progress: 30 },
  ];

  const activityFeed = [
    { user: "John Doe", activity: "Claimed the bounty 'Implement user authentication'", time: "2 minutes ago" },
    { user: "Jane Smith", activity: "Updated progress on 'Optimize database queries'", time: "10 minutes ago" },
    { user: "Alice Johnson", activity: "Claimed the bounty 'Add dark mode support'", time: "20 minutes ago" },
  ];

  // Function to display bounties
  function createBountyCard(bounty) {
    const card = document.createElement("div");
    card.classList.add("card", "bounty-item", "dynamic-element");
    card.dataset.difficulty = bounty.difficulty.toLowerCase();
    card.innerHTML = `
      <h3>${bounty.title}</h3>
      <p>Reward: ${bounty.reward}</p>
      <p>Difficulty: <span class="tag">${bounty.difficulty}</span></p>
      <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${bounty.progress}%"></div>
      </div>
      <p>Progress: ${bounty.progress}%</p>
      <button class="btn claim-bounty">Claim Bounty</button>
      <button class="btn view-bounty" data-bounty="${bounty.title}">View Bounty Details</button>
    `;
    return card;
  }

  // Function to display activity feed
  function generateActivityFeed() {
    activityList.innerHTML = "";
    activityFeed.forEach((activity) => {
      const activityItem = document.createElement("div");
      activityItem.classList.add("activity-item");
      activityItem.innerHTML = `
        <p><strong>${activity.user}</strong> ${activity.activity} <span class="time">${activity.time}</span></p>
      `;
      activityList.appendChild(activityItem);
    });
  }

  // Initial population of bounties and activity feed
  function populateBounties(bountiesToShow) {
    bountyList.innerHTML = "";
    bountiesToShow.forEach((bounty) => {
      const bountyCard = createBountyCard(bounty);
      bountyList.appendChild(bountyCard);
    });
  }

  // Filter bounties
  function filterBounties(filter) {
    if (filter === "all") {
      return bounties;
    }
    return bounties.filter((bounty) => bounty.difficulty.toLowerCase() === filter);
  }

  // Stats
  function updateStats() {
    const totalBounties = bounties.length;
    const totalReward = bounties.reduce((sum, bounty) => sum + Number.parseInt(bounty.reward.slice(1)), 0);
    const averageProgress = Math.round(bounties.reduce((sum, bounty) => sum + bounty.progress, 0) / totalBounties);

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
    `;
  }

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBounties = bounties.filter(
      (bounty) => bounty.title.toLowerCase().includes(searchTerm) || bounty.difficulty.toLowerCase().includes(searchTerm),
    );
    populateBounties(filteredBounties);
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      const filteredBounties = filterBounties(filter);
      populateBounties(filteredBounties);
    });
  });

  // Initial population of content
  populateBounties(bounties);
  updateStats();
  generateActivityFeed();
});
