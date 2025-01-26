document.addEventListener("DOMContentLoaded", () => {
  const aiAssistant = document.getElementById("ai-assistant")
  const aiHeader = document.getElementById("ai-assistant-header")
  const aiToggle = document.getElementById("ai-assistant-toggle")
  const aiMessages = document.getElementById("ai-assistant-messages")
  const aiInput = document.getElementById("ai-assistant-input").querySelector("input")
  const aiSendButton = document.getElementById("ai-assistant-input").querySelector("button")

  // Initialize AI assistant state
  let isMinimized = true
  let conversationHistory = []

  // Load conversation history from localStorage
  const savedHistory = localStorage.getItem("aiConversationHistory")
  if (savedHistory) {
    conversationHistory = JSON.parse(savedHistory)
    conversationHistory.forEach((message) => displayMessage(message.text, message.type))
  }

  function toggleAIAssistant() {
    isMinimized = !isMinimized
    aiAssistant.classList.toggle("minimized", isMinimized)
    aiToggle.innerHTML = isMinimized ? '<i class="fas fa-expand-alt"></i>' : '<i class="fas fa-compress-alt"></i>'
    aiToggle.setAttribute("aria-label", isMinimized ? "Expand AI Assistant" : "Minimize AI Assistant")
    aiAssistant.setAttribute("aria-expanded", !isMinimized)
    if (!isMinimized) {
      aiInput.focus()
    }
  }

  aiHeader.addEventListener("click", toggleAIAssistant)
  aiToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    toggleAIAssistant()
  })

  async function sendMessage() {
    const userMessage = aiInput.value.trim()
    if (userMessage) {
      displayMessage(userMessage, "user-message")
      aiInput.value = ""

      // Simulate AI response
      const aiResponse = await getAIResponse(userMessage)
      displayMessage(aiResponse, "ai-message")

      // Save conversation history
      conversationHistory.push({ text: userMessage, type: "user-message" })
      conversationHistory.push({ text: aiResponse, type: "ai-message" })
      localStorage.setItem("aiConversationHistory", JSON.stringify(conversationHistory))
    }
  }

  function displayMessage(message, className) {
    const messageElement = document.createElement("div")
    messageElement.classList.add(className)
    messageElement.textContent = message
    aiMessages.appendChild(messageElement)
    aiMessages.scrollTop = aiMessages.scrollHeight
  }

  async function getAIResponse(userMessage) {
    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const responses = {
      hello: "Hello! How can I assist you with OpenBounty today?",
      features:
        "OpenBounty offers features like project exploration, bounty system, skill matching, and collaboration tools. Which one would you like to know more about?",
      bounties:
        "Our bounty system allows developers to earn rewards for completing tasks and contributing to open-source projects. You can find available bounties on our Bounties page.",
      projects:
        "We have a wide range of open-source projects available. You can explore them on our Projects page and find ones that match your skills and interests.",
      community:
        "Our community is a vibrant space for developers to connect, collaborate, and grow. Check out our Community page for events, forums, and more!",
      help: "I'm here to help! You can ask me about OpenBounty's features, how to get started, or any specific questions about our platform.",
    }

    const lowercaseMessage = userMessage.toLowerCase()
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowercaseMessage.includes(keyword)) {
        return response
      }
    }

    return "I'm not sure how to respond to that. Can you try asking about our features, bounties, projects, or community?"
  }

  aiSendButton.addEventListener("click", sendMessage)
  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  // Accessibility improvements
  aiAssistant.setAttribute("role", "region")
  aiAssistant.setAttribute("aria-label", "AI Assistant")
  aiAssistant.setAttribute("aria-expanded", "false")
  aiHeader.setAttribute("role", "button")
  aiHeader.setAttribute("tabindex", "0")
  aiHeader.setAttribute("aria-label", "Toggle AI Assistant")
  aiToggle.setAttribute("aria-hidden", "true")
  aiInput.setAttribute("aria-label", "Type your message")
  aiSendButton.setAttribute("aria-label", "Send message")

  // Keyboard accessibility for the header
  aiHeader.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleAIAssistant()
    }
  })

  // Initial greeting
  if (conversationHistory.length === 0) {
    displayMessage("Hello! How can I assist you with OpenBounty today?", "ai-message")
  }

  // Add a keyboard shortcut to toggle the AI assistant
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "/") {
      toggleAIAssistant()
    }
  })
})

