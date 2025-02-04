document.addEventListener("DOMContentLoaded", () => {
  const activityFeed = document.getElementById("activity-feed")

  const activities = [
      "John D. submitted a new bounty: 'Implement dark mode for EcoTrack'",
      "Sarah M. completed the 'Optimize database queries' bounty",
      "New project added: 'AIAssist - Conversational AI assistant'",
      "Mike L. joined the OpenBounty community",
      "EcoTrack project reached 500 stars on GitHub",
      "Emma S. started working on 'Create mobile responsive layout' bounty",
      "Alice G. marked a bounty as 'In Progress' on 'Bug fix for login page'",
      "David P. created a new issue: 'Help with React component debugging'",
      "Zoe K. earned $50 for completing the 'Backend API development' bounty",
      "Daniel B. updated 'Project documentation' for the 'TechNotes' project"
  ]

  function addActivity() {
      const activity = activities[Math.floor(Math.random() * activities.length)]
      const activityElement = document.createElement("div")
      activityElement.classList.add("activity-item")
      activityElement.innerHTML = `
          <span class="activity-time">${new Date().toLocaleTimeString()}</span>
          <span class="activity-text">${activity}</span>
      `
      activityFeed.prepend(activityElement)

      // Keep the feed to a maximum of 5 activities
      if (activityFeed.children.length > 5) {
          activityFeed.removeChild(activityFeed.lastChild)
      }
  }

  // Initial activities
  for (let i = 0; i < 3; i++) {
      addActivity()
  }

  // Add new activity every 10 seconds
  setInterval(addActivity, 10000)

  // Interactive Bounty Button
  const bountyButton = document.getElementById("bounty-button")
  bountyButton.addEventListener("click", () => {
      alert("You just clicked to explore open bounties! Start contributing today!")
  })
})
