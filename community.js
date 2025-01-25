document.addEventListener("DOMContentLoaded", () => {
    const developerOfMonth = document.getElementById("developer-of-month")
    const topContributors = document.getElementById("top-contributors")
    const recentAchievements = document.getElementById("recent-achievements")
    const eventsCalendar = document.getElementById("events-calendar")
    const forumPreview = document.getElementById("forum-preview")
  
    // Developer of the Month
    function updateDeveloperOfMonth() {
      const developers = [
        {
          name: "Alice Johnson",
          avatar: "https://i.pravatar.cc/100?img=1",
          contribution: "Implemented a new AI-powered code review system",
        },
        {
          name: "Bob Smith",
          avatar: "https://i.pravatar.cc/100?img=2",
          contribution: "Optimized database queries, improving overall site performance by 30%",
        },
        {
          name: "Carol Williams",
          avatar: "https://i.pravatar.cc/100?img=3",
          contribution: "Created a comprehensive documentation system for new contributors",
        },
      ]
      const developer = developers[Math.floor(Math.random() * developers.length)]
      developerOfMonth.innerHTML = `
              <img src="${developer.avatar}" alt="${developer.name}" class="avatar">
              <h4>${developer.name}</h4>
              <p>${developer.contribution}</p>
          `
    }
  
    // Top Contributors
    function updateTopContributors() {
      const contributors = [
        { name: "David Brown", contributions: 47 },
        { name: "Emma Davis", contributions: 39 },
        { name: "Frank Wilson", contributions: 32 },
        { name: "Grace Lee", contributions: 28 },
        { name: "Henry Taylor", contributions: 25 },
      ]
      topContributors.innerHTML = contributors
        .map((c) => `<li>${c.name} - ${c.contributions} contributions</li>`)
        .join("")
    }
  
    // Recent Achievements
    function updateRecentAchievements() {
      const achievements = [
        "EcoTrack project reached 1000 stars on GitHub",
        "Mobile Wallet app successfully launched on App Store",
        "AI Assistant integrated into 5 major open-source projects",
        "DataViz library cited in 3 academic papers",
      ]
      recentAchievements.innerHTML = achievements.map((a) => `<li>${a}</li>`).join("")
    }
  
    // Events Calendar
    function updateEventsCalendar() {
      const events = [
        { date: "2025-02-15", title: "OpenBounty Code Sprint" },
        { date: "2025-03-01", title: "AI in Open Source Webinar" },
        { date: "2025-03-20", title: "Community Meetup - New York" },
        { date: "2025-04-05", title: "Hackathon: Sustainable Tech Solutions" },
      ]
      eventsCalendar.innerHTML = events
        .map(
          (e) => `
              <div class="event-item">
                  <span class="event-date">${new Date(e.date).toLocaleDateString()}</span>
                  <span class="event-title">${e.title}</span>
              </div>
          `,
        )
        .join("")
    }
  
    // Forum Preview
    function updateForumPreview() {
      const forumPosts = [
        { title: "Best practices for writing clean code", author: "CodeMaster", replies: 23 },
        { title: "How to contribute to your first open-source project", author: "NewbieDev", replies: 45 },
        { title: "Discussing the future of AI in software development", author: "AIEnthusiast", replies: 67 },
      ]
      forumPreview.innerHTML = forumPosts
        .map(
          (p) => `
              <div class="forum-post">
                  <h4>${p.title}</h4>
                  <p>By ${p.author} | ${p.replies} replies</p>
              </div>
          `,
        )
        .join("")
    }
  
    // Initial updates
    updateDeveloperOfMonth()
    updateTopContributors()
    updateRecentAchievements()
    updateEventsCalendar()
    updateForumPreview()
  
    // Periodic updates
    setInterval(updateDeveloperOfMonth, 60000) // Every minute
    setInterval(updateTopContributors, 300000) // Every 5 minutes
    setInterval(updateRecentAchievements, 600000) // Every 10 minutes
  
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    })
  })
  
  