document.addEventListener("DOMContentLoaded", () => {
    const activityFeed = document.getElementById("activity-feed")
  
    const activities = [
      "John D. submitted a new bounty: 'Implement dark mode for EcoTrack'",
      "Sarah M. completed the 'Optimize database queries' bounty",
      "New project added: 'AIAssist - Conversational AI assistant'",
      "Mike L. joined the OpenBounty community",
      "EcoTrack project reached 500 stars on GitHub",
      "Emma S. started working on 'Create mobile responsive layout' bounty",
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
  })
  
  