document.addEventListener("DOMContentLoaded", () => {
  const aiAssistant = document.getElementById("ai-assistant");
  const aiHeader = document.getElementById("ai-assistant-header");
  const aiToggle = document.getElementById("ai-assistant-toggle");
  const aiMessages = document.getElementById("ai-assistant-messages");
  const aiInput = document.getElementById("ai-input");
  const aiSendButton = document.getElementById("ai-assistant-input").querySelector("button");

  // Initialize AI assistant state
  let isMinimized = true;

  function toggleAIAssistant() {
    isMinimized = !isMinimized;
    aiAssistant.classList.toggle("minimized", isMinimized);
    aiToggle.innerHTML = isMinimized ? '<i class="fas fa-expand-alt"></i>' : '<i class="fas fa-compress-alt"></i>';
    aiToggle.setAttribute("aria-label", isMinimized ? "Expand AI Assistant" : "Minimize AI Assistant");
    aiAssistant.setAttribute("aria-expanded", !isMinimized);
    if (!isMinimized) {
      aiInput.focus();
    }
  }

  aiHeader.addEventListener("click", toggleAIAssistant);
  aiToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleAIAssistant();
  });

  function sendMessage() {
    const userMessage = aiInput.value.trim();
    if (userMessage) {
      displayMessage(userMessage, "user-message");
      aiInput.value = "";
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = getAIResponse(userMessage);
        displayMessage(aiResponse, "ai-message");
      }, 500);
    }
  }

  function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.textContent = message;
    aiMessages.appendChild(messageElement);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function getAIResponse(input) {
    // Simple responses for a normal AI chat
    const responses = {
      "hello": "Hi there! How can I assist you today?",
      "how are you": "I'm just a bot, but I'm here to help!",
      "what is open source": "Open source means software with publicly available code that anyone can modify and distribute.",
      "tell me about bounties": "Bounties are rewards offered for completing tasks, usually in software development or security research.",
      "bye": "Goodbye! Have a great day!"
    };
    
    return responses[input.toLowerCase()] || "I'm here to assist you. Ask me anything!";
  }

  aiSendButton.addEventListener("click", sendMessage);
  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Accessibility improvements
  aiAssistant.setAttribute("role", "region");
  aiAssistant.setAttribute("aria-label", "AI Assistant");
  aiAssistant.setAttribute("aria-expanded", "false");
  aiHeader.setAttribute("role", "button");
  aiHeader.setAttribute("tabindex", "0");
  aiHeader.setAttribute("aria-label", "Toggle AI Assistant");
  aiToggle.setAttribute("aria-hidden", "true");
  aiInput.setAttribute("aria-label", "Type your message");
  aiSendButton.setAttribute("aria-label", "Send message");

  // Initial greeting
  displayMessage("Hello! How can I assist you today?", "ai-message");
});
