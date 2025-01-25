document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement
    const themeToggle = document.getElementById("color-theme-toggle")
  
    const themes = [
      {
        primary: "#6200ea",
        secondary: "#00c853",
        background: "#f5f5f5",
        text: "#212121",
        header: "#4a148c",
      },
      {
        primary: "#d50000",
        secondary: "#ffab00",
        background: "#fafafa",
        text: "#212121",
        header: "#b71c1c",
      },
      {
        primary: "#2962ff",
        secondary: "#00bfa5",
        background: "#e8eaf6",
        text: "#212121",
        header: "#283593",
      },
    ]
  
    let currentTheme = 0
  
    function setTheme(theme) {
      root.style.setProperty("--primary-color", theme.primary)
      root.style.setProperty("--secondary-color", theme.secondary)
      root.style.setProperty("--background-color", theme.background)
      root.style.setProperty("--text-color", theme.text)
      root.style.setProperty("--header-color", theme.header)
    }
  
    themeToggle.addEventListener("click", () => {
      currentTheme = (currentTheme + 1) % themes.length
      setTheme(themes[currentTheme])
    })
  
    // Set initial theme
    setTheme(themes[currentTheme])
  })
  
  