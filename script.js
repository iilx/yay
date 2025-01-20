document.addEventListener("DOMContentLoaded", () => {
  const darkModeButton = document.getElementById("toggleDarkMode");
  const body = document.body;
  const roastButton = document.getElementById("roastBtn");

  const burnBotWindow1 = document.getElementById("burnBotWindow1");
  const burnBotWindow2 = document.getElementById("burnBotWindow2");
  const roastContent = document.getElementById("roastContent");

  // Dark Mode Toggle
  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  // Function to generate a random roast
  function generateRoast() {
    const roasts = [
      "You're as interesting as a wet sock.",
      "I bet your hobby is binge-watching TV shows.",
      "You want to retire early? You're already a master at doing nothing.",
      "Your life goal is to be famous? You're only famous for being invisible."
    ];
    return roasts[Math.floor(Math.random() * roasts.length)];
  }

  // Show the second window with the roast
  roastButton.addEventListener("click", () => {
    roastContent.textContent = "Burn Bot is thinking...";
    setTimeout(() => {
      burnBotWindow2.style.display = "block"; // Show the second window
      roastContent.textContent = generateRoast(); // Set a random roast
    }, 1500);
  });
});
