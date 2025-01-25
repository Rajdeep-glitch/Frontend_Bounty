document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("news-list")

  // Sample news data (in a real application, this would come from a server or API)
  const newsItems = [
    { title: "New AI Model Breaks Records in Natural Language Processing", date: "2025-01-24" },
    { title: "Quantum Computing Breakthrough: 1000 Qubit Processor Unveiled", date: "2025-01-23" },
    { title: "Tech Giants Collaborate on Open-Source Climate Change Initiative", date: "2025-01-22" },
  ]

  // Populate news list
  newsItems.forEach((item) => {
    const newsItem = document.createElement("div")
    newsItem.classList.add("news-item")
    newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>Published on: ${item.date}</p>
        `
    newsList.appendChild(newsItem)
  })
})

