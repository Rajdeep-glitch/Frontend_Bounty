document.addEventListener("DOMContentLoaded", () => {
  const aiAssistant = document.getElementById("ai-assistant")
  const aiToggle = document.getElementById("ai-assistant-toggle")
  const aiMessages = document.getElementById("ai-assistant-messages")
  const aiInput = document.getElementById("ai-assistant-input").querySelector("input")
  const aiSendButton = document.getElementById("ai-assistant-input").querySelector("button")

  aiToggle.addEventListener("click", () => {
    aiAssistant.classList.toggle("minimized")
    aiToggle.textContent = aiAssistant.classList.contains("minimized") ? "↗" : "▼"
  })

  async function sendMessage() {
    const userMessage = aiInput.value.trim()
    if (userMessage) {
      displayMessage(userMessage, "user-message")
      aiInput.value = ""

      // Simulate AI response
      const aiResponse = await getAIResponse(userMessage)
      displayMessage(aiResponse, "ai-message")
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

  // Initial greeting
  displayMessage("Hello! How can I assist you with OpenBounty today?", "ai-message")
})

