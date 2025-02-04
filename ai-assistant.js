document.addEventListener("DOMContentLoaded", () => {
  const aiAssistant = document.getElementById("ai-assistant");
  const aiHeader = document.getElementById("ai-assistant-header");
  const aiToggle = document.getElementById("ai-assistant-toggle");
  const aiMessages = document.getElementById("ai-assistant-messages");
  const aiInput = document.getElementById("ai-input");
  const aiSendButton = document.getElementById("ai-assistant-input").querySelector("button");

  // Initialize GeminiAI
  const ai = require("./../../BackendProjects/Gemini_Node.js");
  const aiModel = new ai.GeminiAI();

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

  async function sendMessage() {
    const userMessage = aiInput.value.trim();
    if (userMessage) {
      displayMessage(userMessage, "user-message");
      aiInput.value = "";

      // Get AI response from GeminiAI
      const aiResponse = await aiModel.getResponse(userMessage);
      displayMessage(aiResponse, "ai-message");
    }
  }

  function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.textContent = message;
    aiMessages.appendChild(messageElement);
    aiMessages.scrollTop = aiMessages.scrollHeight;
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

  // Initial greeting with Open Source and Bounty Concepts
  displayMessage("Hello! How can I assist you with Open Source or Bounty projects today?", "ai-message");

  // Content related to open-source and bounty systems
  const openSourceMessage = "Open source is a practice where developers share the source code of a project publicly, allowing anyone to view, modify, and distribute it. Bounty programs are often used to reward contributors for identifying bugs, adding features, or improving software.";
  
  const bountyMessage = "A bounty program is a reward-based initiative where developers or hackers are paid for finding and reporting vulnerabilities or contributing enhancements to a project. It's a way to encourage collaboration and improve the quality of open-source projects.";
  
  displayMessage(openSourceMessage, "ai-message");
  displayMessage(bountyMessage, "ai-message");

  // Extra interactive content on Open Source and Bounty Concepts
  const openSourcePrompt = "Would you like to learn more about how open-source communities work or explore a specific bounty platform?";
  const bountyPrompt = "Are you interested in finding open-source projects with bounty programs or setting one up yourself?";

  displayMessage(openSourcePrompt, "ai-message");
  displayMessage(bountyPrompt, "ai-message");

  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const userMessage = aiInput.value.trim().toLowerCase();
      if (userMessage.includes("learn") || userMessage.includes("more")) {
        displayMessage("Open-source communities thrive on collaboration and transparency. There are platforms like GitHub, GitLab, and Bitbucket where developers can contribute to projects and earn recognition for their work.", "ai-message");
      } else if (userMessage.includes("platform") || userMessage.includes("bounty")) {
        displayMessage("Popular bounty platforms include Gitcoin, HackerOne, and Bugcrowd. These platforms host bounties for security vulnerabilities and other project contributions.", "ai-message");
      } else {
        displayMessage("If you have more questions about open source or bounty systems, feel free to ask!", "ai-message");
      }
      aiInput.value = "";
    }
  });
});
