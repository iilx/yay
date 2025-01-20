// Elements
const roastButton = document.getElementById("generateRoast");
const macWindow = document.querySelector(".mac-window");

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Generate Roast
roastButton.addEventListener("click", () => {
  const name = document.getElementById("name").value || "Someone";
  const hobby = document.getElementById("hobby").value === "Custom"
    ? document.getElementById("customHobby").value
    : document.getElementById("hobby").value;
  const trait = document.getElementById("trait").value === "Custom"
    ? document.getElementById("customTrait").value
    : document.getElementById("trait").value;
  const lifeGoal = document.getElementById("lifeGoal").value === "Custom"
    ? document.getElementById("customLifeGoal").value
    : document.getElementById("lifeGoal").value;

  // Decide focus for roast
  const focus = getRandom(["hobby", "trait", "lifeGoal"]);
  let specificRoast = "";

  if (focus === "hobby" && hobby) {
    specificRoast = `${name}, you call ${hobby} a hobby? People with actual hobbies are embarrassed for you!`;
  } else if (focus === "trait" && trait) {
    specificRoast = `${name}, being ${trait} isn't a personality trait. It's just a reason for people to avoid you.`;
  } else if (focus === "lifeGoal" && lifeGoal) {
    specificRoast = `${name}, having "${lifeGoal}" as a life goal is like aiming to be the world's best thumb wrestler—completely pointless.`;
  } else {
    specificRoast = `${name}, you’re so bland, even this roast generator couldn’t figure out where to start.`;
  }

  // Create and show the second window
  showSecondWindow(specificRoast);
});

// Create Second Window with Animation
function showSecondWindow(roast) {
  // Position adjustment for the first window
  const firstWindow = document.querySelector(".mac-window");
  firstWindow.style.transform = "translateX(-220px)";

  // Create the second window
  const secondWindow = document.createElement("div");
  secondWindow.classList.add("mac-window");
  secondWindow.style.position = "absolute";
  secondWindow.style.left = "calc(50% + 220px)";
  secondWindow.style.top = "50%";
  secondWindow.style.transform = "translate(-50%, -50%)";

  // Add "thinking" message
  const header = document.createElement("div");
  header.classList.add("window-header");
  header.innerHTML = `
    <span class="close"></span>
    <span class="minimize"></span>
    <span class="maximize"></span>
  `;

  const body = document.createElement("div");
  body.classList.add("window-body");
  const thinkingText = document.createElement("p");
  thinkingText.textContent = "Roast Bot is thinking...";
  thinkingText.id = "thinkingText";

  body.appendChild(thinkingText);
  secondWindow.appendChild(header);
  secondWindow.appendChild(body);

  document.body.appendChild(secondWindow);

  // Simulate thinking and show roast
  setTimeout(() => {
    thinkingText.textContent = roast;
  }, 2000);
}

// Utility Functions
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Populate dropdowns with examples
const hobbies = [
  "Playing video games", "Knitting", "Cooking", "Gardening", "Hiking", 
  "Fishing", "Painting", "Singing", "Dancing", "Photography",
  "Cycling", "Reading books", "Writing poetry", "Playing chess", "Yoga",
  "Collecting stamps", "Bird watching", "Learning languages", "Traveling", "Podcasting"
];

const traits = [
  "Overconfident", "Shy", "Funny", "Kind", "Ambitious", 
  "Lazy", "Talkative", "Stubborn", "Generous", "Impulsive", 
  "Arrogant", "Curious", "Adventurous", "Creative", "Calm",
  "Anxious", "Extroverted", "Introverted", "Perfectionist", "Clumsy"
];

const lifeGoals = [
  "Becoming rich", "Starting a family", "Traveling the world", "Writing a book", 
  "Learning to dance", "Owning a home", "Running a marathon", "Starting a business", 
  "Making a difference", "Becoming famous", "Building a career", "Finding true love", 
  "Getting fit", "Helping others", "Learning a new language", "Living sustainably",
  "Getting a degree", "Climbing a mountain", "Retiring early", "Adopting a pet"
];

// Populate dropdown function
function populateDropdown(id, items) {
  const dropdown = document.getElementById(id);
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    dropdown.appendChild(option);
  });
}

// Initialize dropdowns
populateDropdown("hobby", hobbies);
populateDropdown("trait", traits);
populateDropdown("lifeGoal", lifeGoals);
