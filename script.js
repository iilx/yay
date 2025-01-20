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
  const roastButton = document.getElementById("roastBtn");
  const customInputField = document.getElementById("customInput");
  const roastWindow1 = document.getElementById("burnBotWindow1");
  const roastWindow2 = document.getElementById("burnBotWindow2");
  const roastContent = document.getElementById("roastContent");
  const roastContent2 = document.getElementById("roastContent2");

  // Roasts for various categories
  const hobbyRoasts = {
    "Knitting": "Ah, knitting. I bet you're making sweaters for your imaginary friends.",
    "Cooking": "Cooking, huh? Too bad your meals are as burnt as your personality.",
    "Gaming": "You spend more time in front of a screen than an actual person. Good luck leveling up in real life.",
    "Reading": "Reading? Sure, just keep reading about how to avoid real-world responsibilities.",
    "Photography": "Photography? More like collecting pixels of your failures.",
    "Gardening": "Gardening? You know, plants are smarter than you. At least they don’t need Wi-Fi to grow.",
    "Painting": "If your paintings are anything like your life choices, they must be abstract disasters.",
    "Writing": "Writing? Sure, keep typing your way into irrelevance.",
    "Running": "Running? That's cute. Is it from your problems or from your goals?",
    "Cycling": "Cycling? More like biking away from your responsibilities.",
    "Swimming": "Swimming? Hopefully, you're better at it than you are at dealing with emotions.",
    "Traveling": "Traveling? Yeah, because avoiding your problems in new places is a great plan.",
    "Fishing": "Fishing? Are you trying to catch a better life, or just some fish to drown your sorrows in?",
    "Dancing": "Dancing? Let me guess, you’re really good at the awkward shuffle.",
    "Singing": "Singing? I hope you're not aiming for a career in it... unless the goal is to clear out a room.",
    "Shopping": "Shopping? Sure, keep spending money you don’t have on things you’ll never use.",
    "Coding": "Coding? Bet you can’t even debug your own life.",
    "Jogging": "Jogging? You know you don’t have to keep running away from your problems, right?",
    "Yoga": "Yoga? More like pretending to be flexible while your life is anything but.",
    "Hiking": "Hiking? You’re climbing mountains, but good luck with the climb to self-improvement."
  };

  const traitRoasts = {
    "Kind": "You're so kind, it's like you're trying to overcompensate for something. It's okay, we all know you’re hiding something.",
    "Loyal": "Loyalty is nice, but maybe you should consider loyalty to yourself for once.",
    "Funny": "You're funny, in the way a clown at a kids' birthday party is funny. But without the balloons.",
    "Shy": "Shy? Is that why you hide from every real conversation?",
    "Smart": "Smart? Sure, you're clever, but only at avoiding responsibility.",
    "Confident": "You're confident, sure, but overconfidence doesn’t fix a personality.",
    "Creative": "Creative? You have the creativity of a toddler with a crayon and a blank wall.",
    "Optimistic": "You’re optimistic. Too bad your optimism is the only thing keeping you from seeing how bad things really are.",
    "Generous": "Generous? I bet you're the type to give away all your stuff, but never your time or effort.",
    "Lazy": "Lazy? You wouldn't even move to save yourself from a burning building.",
    "Empathetic": "Empathy? You care so much, but only about people who can benefit you.",
    "Ambitious": "Ambitious? Sure, you're chasing big dreams, but you’d probably trip over your own feet doing it.",
    "Outgoing": "Outgoing? More like talking just to fill the silence because you can't stand being alone with your thoughts.",
    "Stubborn": "Stubborn? You’re so stubborn you’d argue with a wall... and probably lose.",
    "Impulsive": "Impulsive? You make decisions faster than you regret them.",
    "Introverted": "Introverted? Well, that explains your inability to have a meaningful conversation.",
    "Organized": "Organized? Is that what you call it? Piles of mess that are somehow 'arranged'.",
    "Adventurous": "Adventurous? Yeah, you’re great at avoiding any real commitments by jumping from one thing to the next."
  };

  const lifeGoalRoasts = {
    "Become a millionaire": "You want to be a millionaire? I hope your dreams are as rich as your bank account... which is currently empty.",
    "Travel the world": "Traveling the world? Sure, keep running away from your problems while collecting a bunch of Instagram photos.",
    "Learn a new language": "Learning a new language? Too bad you can’t even communicate with your own thoughts.",
    "Start a business": "Starting a business? You'd probably start it with a 'Sorry, out of stock' sign.",
    "Buy a house": "Buying a house? Yeah, maybe in Monopoly, not in real life.",
    "Get married": "Getting married? I hope you know that a relationship is not a reality TV show.",
    "Have kids": "Have kids? I hope you’re ready to handle responsibilities... unlike the last 10 things you tried to do.",
    "Retire early": "Retire early? Sure, as long as 'early' means never working for anything you actually want.",
    "Run a marathon": "Running a marathon? The only marathon you're running is one for snacks.",
    "Finish a novel": "Finishing a novel? You can't even finish a conversation without getting distracted.",
    "Get a promotion": "A promotion? Yeah, maybe if they’re looking for someone who knows how to procrastinate like a pro.",
    "Start a YouTube channel": "A YouTube channel? Sure, but you'd probably forget to upload anything... even the intro video.",
    "Become famous": "Become famous? You’re already famous, but only for your ability to be forgettable.",
    "Climb a mountain": "Climbing a mountain? You can barely climb out of bed in the morning.",
    "Master a skill": "Mastering a skill? You’ve mastered procrastination like a true expert.",
    "Buy a sports car": "Buy a sports car? The only thing you’re speeding towards is failure.",
    "Adopt a pet": "Adopt a pet? Maybe you should try adopting a bit of responsibility first.",
    "Make a difference": "Making a difference? I hope you mean making a difference in your own habits... because those need work.",
    "Find true love": "True love? You can’t even find your keys half the time."
  };

  // Generate roast based on selected options
  function generateRoast(name, selectedHobby, selectedTrait, selectedLifeGoal) {
    let roastText = `${name}, `;

    // Add roast for hobby
    if (selectedHobby && hobbyRoasts[selectedHobby]) {
      roastText += `${hobbyRoasts[selectedHobby]} `;
    }
    
    // Add roast for trait
    if (selectedTrait && traitRoasts[selectedTrait]) {
      roastText += `${traitRoasts[selectedTrait]} `;
    }

    // Add roast for life goal
    if (selectedLifeGoal && lifeGoalRoasts[selectedLifeGoal]) {
      roastText += `${lifeGoalRoasts[selectedLifeGoal]} `;
    }

    return roastText;
  }

  // Handle Roast Generation
  roastButton.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const selectedHobby = document.getElementById("hobby").value;
    const selectedTrait = document.getElementById("trait").value;
    const selectedLifeGoal = document.getElementById("lifeGoal").value;
    const customInput = customInputField.value.trim();

    if (!name) {
      alert("Please enter your name!");
      return;
    }

    if (selectedHobby === "Other" && !customInput && !selectedTrait && !selectedLifeGoal) {
      alert("Please enter your custom hobby or select a trait/life goal!");
      return;
    }

    // Show the "thinking" message
    roastContent.textContent = "Burn Bot is thinking...";

    // Create roast content after delay to simulate thinking
    setTimeout(() => {
      roastWindow1.style.display = "block";

      // If the custom input is provided, roast with that, else roast based on selected options
      if (customInput) {
        roastContent2.textContent = generateRoast(name, customInput, "", "");
      } else {
        roastContent2.textContent = generateRoast(name, selectedHobby, selectedTrait, selectedLifeGoal);
      }

      // Show the second window with the roast
      roastWindow2.style.display = "block";
    }, 1500);
  });

  // Initialize the select options and hide the second window initially
  roastWindow2.style.display = "none";
});
