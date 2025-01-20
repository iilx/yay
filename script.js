document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const darkModeButton = document.getElementById("toggleDarkMode");
  const body = document.body;
  const windows = document.querySelectorAll(".mac-window");
  
  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    windows.forEach(window => window.classList.toggle("dark-mode"));
  });

  // Elements for the Roast Bot and Custom Input
  const roastButton = document.getElementById("roastButton");
  const customInputField = document.getElementById("customInput");
  const roastWindow1 = document.getElementById("burnBotWindow1");
  const roastWindow2 = document.getElementById("burnBotWindow2");
  const roastContent = document.getElementById("roastContent");
  const roastContent2 = document.getElementById("roastContent2");

  // Options for Roast Categories
  const hobbies = ["Knitting", "Cooking", "Gaming", "Reading", "Photography", "Gardening", "Painting", "Writing", "Running", "Cycling", "Swimming", "Traveling", "Fishing", "Dancing", "Singing", "Shopping", "Coding", "Jogging", "Yoga", "Hiking"];
  const traits = ["Kind", "Loyal", "Funny", "Shy", "Smart", "Confident", "Creative", "Optimistic", "Generous", "Lazy", "Empathetic", "Ambitious", "Outgoing", "Stubborn", "Impulsive", "Introverted", "Organized", "Adventurous", "Trustworthy", "Needy"];
  const lifeGoals = ["Become a millionaire", "Travel the world", "Learn a new language", "Start a business", "Buy a house", "Get married", "Have kids", "Retire early", "Run a marathon", "Finish a novel", "Get a promotion", "Start a YouTube channel", "Become famous", "Climb a mountain", "Master a skill", "Buy a sports car", "Adopt a pet", "Make a difference", "Find true love", "Change the world"];

  // Populate the select options with hobby, trait, and life goal
  function populateSelectOptions() {
    const hobbySelect = document.getElementById("hobbySelect");
    const traitSelect = document.getElementById("traitSelect");
    const lifeGoalSelect = document.getElementById("lifeGoalSelect");

    hobbies.forEach(hobby => {
      const option = document.createElement("option");
      option.value = hobby;
      option.textContent = hobby;
      hobbySelect.appendChild(option);
    });

    traits.forEach(trait => {
      const option = document.createElement("option");
      option.value = trait;
      option.textContent = trait;
      traitSelect.appendChild(option);
    });

    lifeGoals.forEach(goal => {
      const option = document.createElement("option");
      option.value = goal;
      option.textContent = goal;
      lifeGoalSelect.appendChild(option);
    });
  }

  // Function to generate a roast based on selected categories
  function generateRoast(selectedHobby, selectedTrait, selectedLifeGoal) {
    const randomHobbies = [
      "You're as interesting as a wet sock. I bet your hobby is binge-watching TV shows... oh wait, that’s you every weekend.",
      "Your hobby is like a bad joke – no one laughs, and it never ends well.",
      "I bet your hobby involves collecting dust. Seriously, get a hobby that doesn’t involve checking your phone every five minutes."
    ];
    const randomTraits = [
      "You’re so kind, it’s almost annoying. I bet you hand out compliments like candy.",
      "Being loyal is great... unless you're loyal to things that are totally beneath you, like that hobby of yours.",
      "Funny? More like painfully awkward. Every time you crack a joke, a part of me dies inside."
    ];
    const randomGoals = [
      "Your life goal is to be famous? Look, the only thing you're famous for is being really good at being ignored.",
      "You want to retire early? That's cute. Maybe you'll retire from being productive, because you're already good at that.",
      "Your goal of running a marathon? Yeah, right. The only marathon you're running is on Netflix."
    ];

    // Pick a random roast from each category
    const hobbyRoast = randomHobbies[Math.floor(Math.random() * randomHobbies.length)];
    const traitRoast = randomTraits[Math.floor(Math.random() * randomTraits.length)];
    const lifeGoalRoast = randomGoals[Math.floor(Math.random() * randomGoals.length)];

    let roastText = "";

    if (selectedHobby) roastText += `${hobbyRoast} `;
    if (selectedTrait) roastText += `${traitRoast} `;
    if (selectedLifeGoal) roastText += `${lifeGoalRoast}`;

    return roastText;
  }

  // Handle Roast Generation
  roastButton.addEventListener("click", () => {
    const selectedHobby = document.getElementById("hobbySelect").value;
    const selectedTrait = document.getElementById("traitSelect").value;
    const selectedLifeGoal = document.getElementById("lifeGoalSelect").value;
    const customInput = customInputField.value.trim();

    if (selectedHobby === "Select a hobby" && selectedTrait === "Select a trait" && selectedLifeGoal === "Select a life goal" && customInput === "") {
      alert("Please select at least one option or enter a custom input.");
      return;
    }

    // Show the "thinking" message
    roastContent.textContent = "Burn Bot is thinking...";

    // Create roast content after delay to simulate thinking
    setTimeout(() => {
      roastWindow1.style.display = "block";

      // If the custom option is selected, use it for roasting
      if (customInput) {
        roastContent2.textContent = generateRoast(customInput, "", "");
      } else {
        roastContent2.textContent = generateRoast(selectedHobby, selectedTrait, selectedLifeGoal);
      }

      // Animate second window appearance
      roastWindow2.style.display = "block";
    }, 1500);
  });

  // Initialize the select options and hide the second window initially
  populateSelectOptions();
  roastWindow2.style.display = "none";
});
