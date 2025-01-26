document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  })

  const projectExplorer = document.getElementById("project-explorer")
  const demoTabs = document.querySelectorAll(".demo-tab")
  const demoContent = document.getElementById("demo-content")

  const projects = [
    { name: "EcoTrack", description: "Open-source environmental monitoring platform", tags: ["Python", "IoT"] },
    { name: "CodeMentor", description: "Peer-to-peer programming mentorship app", tags: ["JavaScript", "React"] },
    { name: "DataViz", description: "Data visualization library for scientific research", tags: ["Python", "D3.js"] },
    { name: "SecureShare", description: "Encrypted file sharing system", tags: ["Rust", "Cryptography"] },
    { name: "AIAssist", description: "AI-powered coding assistant", tags: ["Python", "Machine Learning"] },
  ]

  function createProjectCard(project) {
    const projectCard = document.createElement("div")
    projectCard.classList.add("card", "dynamic-element")
    projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div>
                ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <button class="btn explore-project">Explore Project</button>
        `
    return projectCard
  }

  function populateProjectExplorer() {
    if (projectExplorer) {
      projectExplorer.innerHTML = ""
      projects.forEach((project) => {
        const projectCard = createProjectCard(project)
        projectExplorer.appendChild(projectCard)
      })
    }
  }

  populateProjectExplorer()

  // Add hover effect and click event to project cards
  if (projectExplorer) {
    projectExplorer.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".card")
      if (card) {
        card.style.transform = "scale(1.05)"
        card.style.transition = "transform 0.3s ease"
      }
    })

    projectExplorer.addEventListener("mouseout", (e) => {
      const card = e.target.closest(".card")
      if (card) {
        card.style.transform = "scale(1)"
      }
    })

    projectExplorer.addEventListener("click", (e) => {
      if (e.target.classList.contains("explore-project")) {
        const projectName = e.target.closest(".card").querySelector("h3").textContent
        alert(`Exploring project: ${projectName}`)
        // In a real application, this would navigate to the project page
      }
    })
  }

  // Interactive Feature Demo
  const demoCont = {
    "bounty-system": `
        <h3>Bounty System Demo</h3>
        <p>Experience our intuitive bounty system:</p>
        <ol>
            <li>Browse available bounties</li>
            <li>Select a task that matches your skills</li>
            <li>Submit your solution</li>
            <li>Get rewarded upon approval</li>
        </ol>
        <div id="bounty-demo">
            <select id="bounty-select">
                <option value="">Select a bounty</option>
                <option value="1">Implement user authentication</option>
                <option value="2">Optimize database queries</option>
                <option value="3">Add dark mode support</option>
            </select>
            <button id="claim-bounty" class="btn">Claim Bounty</button>
        </div>
        <div id="bounty-result"></div>
    `,
    "skill-matching": `
        <h3>Skill Matching Demo</h3>
        <p>See how we match your skills to projects:</p>
        <input type="text" id="skill-input" placeholder="Enter your skills (e.g., JavaScript, Python)">
        <button id="match-skills-btn" class="btn">Find Matching Projects</button>
        <div id="matching-projects"></div>
    `,
    collaboration: `
        <h3>Collaboration Tools Demo</h3>
        <p>Explore our integrated collaboration features:</p>
        <div id="collab-demo">
            <div id="code-editor" contenteditable="true">
// Collaborative code editor
function greeting(name) {
    return \`Hello, \${name}!\`;
}
            </div>
            <div id="chat-box">
                <div id="chat-messages"></div>
                <input type="text" id="chat-input" placeholder="Type your message...">
                <button id="send-chat" class="btn">Send</button>
            </div>
        </div>
    `,
  }

  function setActiveTab(tab) {
    demoTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    demoContent.innerHTML = demoCont[tab.dataset.tab]
    initializeDemoFunctionality(tab.dataset.tab)
  }

  if (demoTabs) {
    demoTabs.forEach((tab) => {
      tab.addEventListener("click", () => setActiveTab(tab))
    })
  }

  function initializeDemoFunctionality(tab) {
    switch (tab) {
      case "bounty-system":
        const claimBtn = document.getElementById("claim-bounty")
        const bountySelect = document.getElementById("bounty-select")
        const resultDiv = document.getElementById("bounty-result")
        if (claimBtn && bountySelect && resultDiv) {
          claimBtn.addEventListener("click", () => {
            const selectedBounty = bountySelect.value
            if (selectedBounty) {
              resultDiv.innerHTML = '<div class="loading"></div>'
              setTimeout(() => {
                resultDiv.innerHTML = `Congratulations! You've claimed the bounty "${bountySelect.options[bountySelect.selectedIndex].text}". Start working on your solution!`
              }, 1500)
            } else {
              resultDiv.innerHTML = "Please select a bounty first."
            }
          })
        }
        break
      case "skill-matching":
        const matchBtn = document.getElementById("match-skills-btn")
        const skillInput = document.getElementById("skill-input")
        const matchingProjects = document.getElementById("matching-projects")
        if (matchBtn && skillInput && matchingProjects) {
          matchBtn.addEventListener("click", () => {
            const skills = skillInput.value
              .toLowerCase()
              .split(",")
              .map((s) => s.trim())
            const matches = projects.filter((p) => p.tags.some((tag) => skills.includes(tag.toLowerCase())))
            matchingProjects.innerHTML =
              matches.length > 0
                ? matches.map((p) => `<p>${p.name} - ${p.description}</p>`).join("")
                : "No matching projects found. Try different skills!"
          })
        }
        break
      case "collaboration":
        const codeEditor = document.getElementById("code-editor")
        const chatInput = document.getElementById("chat-input")
        const chatMessages = document.getElementById("chat-messages")
        const sendChatBtn = document.getElementById("send-chat")
        if (codeEditor && chatInput && chatMessages && sendChatBtn) {
          codeEditor.addEventListener("input", () => {
            // Simulate real-time collaboration
            setTimeout(() => {
              chatMessages.innerHTML += `<p><strong>Collaborator:</strong> I've updated the code. What do you think?</p>`
              chatMessages.scrollTop = chatMessages.scrollHeight
            }, 2000)
          })
          sendChatBtn.addEventListener("click", () => {
            const message = chatInput.value
            if (message) {
              chatMessages.innerHTML += `<p><strong>You:</strong> ${message}</p>`
              chatInput.value = ""
              chatMessages.scrollTop = chatMessages.scrollHeight
            }
          })
        }
        break
    }
  }

  // Set initial active tab
  if (demoTabs && demoTabs.length > 0) {
    setActiveTab(demoTabs[0])
  }
})

