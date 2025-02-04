document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("news-list");
  const newsFeedBtn = document.getElementById("news-feed-btn");

  // Sample news data (can be fetched from an API or server)
  const newsItems = [
    { title: "New AI Model Breaks Records in Natural Language Processing", date: "2025-01-24", content: "This new AI model has achieved remarkable results in understanding and generating human-like text, setting new benchmarks in the industry." },
    { title: "Quantum Computing Breakthrough: 1000 Qubit Processor Unveiled", date: "2025-01-23", content: "A major leap in quantum computing, enabling faster and more complex computations, bringing us closer to solving previously impossible problems." },
    { title: "Tech Giants Collaborate on Open-Source Climate Change Initiative", date: "2025-01-22", content: "Major companies are joining forces to fight climate change by releasing open-source software solutions to aid environmental causes." },
  ];

  // Populate the news list with the latest tech news
  newsItems.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
      <h3>${item.title}</h3>
      <p>Published on: ${item.date}</p>
      <p class="news-content">${item.content}</p>
      <button class="comment-btn">Comment</button>
      <div class="comments-section" style="display: none;">
        <textarea class="comment-input" placeholder="Add a comment..."></textarea>
        <button class="submit-comment-btn">Submit Comment</button>
      </div>
    `;
    newsList.appendChild(newsItem);

    // Show comment section when "Comment" button is clicked
    const commentBtn = newsItem.querySelector(".comment-btn");
    const commentSection = newsItem.querySelector(".comments-section");
    commentBtn.addEventListener("click", () => {
      commentSection.style.display = "block";
    });

    // Submit a comment
    const submitCommentBtn = newsItem.querySelector(".submit-comment-btn");
    submitCommentBtn.addEventListener("click", () => {
      const commentInput = newsItem.querySelector(".comment-input");
      alert(`Comment Submitted: ${commentInput.value}`);
      commentInput.value = "";  // Clear input
    });
  });

  // Dynamic News Feed Update
  newsFeedBtn.addEventListener("click", () => {
    const newItem = {
      title: "AI Revolutionizing Healthcare: New Diagnostic Tools Released",
      date: new Date().toLocaleDateString(),
      content: "AI-driven diagnostic tools are now capable of analyzing medical data with greater accuracy, opening new doors for healthcare advancements.",
    };

    const newNewsItem = document.createElement("div");
    newNewsItem.classList.add("news-item");
    newNewsItem.innerHTML = `
      <h3>${newItem.title}</h3>
      <p>Published on: ${newItem.date}</p>
      <p class="news-content">${newItem.content}</p>
      <button class="comment-btn">Comment</button>
      <div class="comments-section" style="display: none;">
        <textarea class="comment-input" placeholder="Add a comment..."></textarea>
        <button class="submit-comment-btn">Submit Comment</button>
      </div>
    `;
    newsList.prepend(newNewsItem);  // Add new item at the top
  });
});
