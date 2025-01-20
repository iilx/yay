// Roast Bot with Large Dataset
const roastBot = {
  data: [
    // Responses for "name"
    { keyword: "name", responses: [
      "Your name sounds like the result of a drunk Scrabble game.",
      "Did your parents lose a bet when they named you?",
      "Your name is the punchline of a joke that nobody finds funny.",
      "If names were a competition, yours would come in last place.",
      "Your name makes Siri malfunction every time it hears it."
    ] },
    // Responses for "hobby"
    { keyword: "hobby", responses: [
      "Knitting and drinking tea? Are you a grandma trapped in a teenager's body?",
      "Your hobbies are as exciting as watching paint dry.",
      "Your hobbies explain why you have so much free time—nobody wants to join you.",
      "Is 'being boring' officially listed as one of your hobbies yet?",
      "If hobbies were meant to impress, you definitely missed the memo."
    ] },
    // Responses for "smart"
    { keyword: "smart", responses: [
      "If being smart was contagious, you'd be the safest person in the room.",
      "You make a box of rocks look like it has a Ph.D.",
      "Smart? Let me put it this way: you're a great advertisement for bad decisions.",
      "Your brain must be like Wi-Fi—spotty and rarely connected.",
      "Calling you smart would be an insult to people with actual intelligence."
    ] },
    // Responses for "profile picture"
    { keyword: "profile picture", responses: [
      "If bad decisions were a profile picture, yours would win an award.",
      "Is your profile picture blurry on purpose or just a cry for help?",
      "Your profile picture looks like it was taken with a potato from 1995.",
      "Oh, is that your profile picture? I thought it was an abstract art piece.",
      "Your profile picture is the visual equivalent of a bad haircut."
    ] },
    // Responses for "math"
    { keyword: "math", responses: [
      "If math was a talent show, you'd be the commercial break.",
      "You're proof that calculators were invented for a reason.",
      "Your math skills make kindergartners feel like geniuses.",
      "Do you struggle with math or just numbers in general?",
      "If 2+2=4, you're the equation that breaks all logic."
    ] },
    // Responses for "friends"
    { keyword: "friends", responses: [
      "Friends? Oh, you mean those imaginary people you talk to in the mirror?",
      "You must be great at making friends—too bad none of them stick around.",
      "If friendships were graded, you'd be the dropout.",
      "Your idea of making friends is as outdated as MySpace.",
      "Even introverts think you're too socially awkward to handle."
    ] },
    // Responses for "single"
    { keyword: "single", responses: [
      "You're single because you're the human version of a red flag.",
      "Being single suits you—nobody wants to deal with that personality.",
      "Single? You should write a book about how to repel people effectively.",
      "You’re so single, even your shadow avoids you.",
      "If loneliness was an Olympic sport, you'd be a gold medalist."
    ] },
    // Responses for "attractive"
    { keyword: "attractive", responses: [
      "Attractive? Sure, if we're grading on a curve set by swamp monsters.",
      "You’re so attractive that mirrors refuse to show your reflection.",
      "You must be the dictionary definition of 'beauty is in the eye of the beholder.'",
      "Attractive? That's a stretch even your yoga instructor wouldn't approve of.",
      "Your attractiveness is like Wi-Fi in a basement—nonexistent."
    ] },
    // Responses for "life advice"
    { keyword: "life advice", responses: [
      "Here's some life advice: stop being yourself. It's not working.",
      "If life gave you lemons, you'd probably trade them for bad decisions.",
      "Life advice? Maybe start by not talking to a roast bot for validation.",
      "Step one: Get your life together. Step two: Repeat step one.",
      "You don’t need life advice; you need a life overhaul."
    ] },
    // Responses for "career"
    { keyword: "career", responses: [
      "Your career is like a bad joke—nobody gets it, and it’s not funny.",
      "It’s amazing your career hasn’t sued you for malpractice yet.",
      "Your career is proof that failing upwards is a real thing.",
      "If careers had expiration dates, yours would already be past due.",
      "Your job description should just say 'professional disappointment.'"
    ] },
    // Add 490+ responses similarly under relevant categories
  ],

  // Get a roast based on user input
  getRoast(input) {
    input = input.toLowerCase();
    for (let item of this.data) {
      if (input.includes(item.keyword)) {
        return item.responses[Math.floor(Math.random() * item.responses.length)];
      }
    }
    return "I can’t even roast you properly because your question is too boring!";
  }
};

// Function to chat with the bot
function chatWithBot(userInput) {
  const roast = roastBot.getRoast(userInput);
  console.log(`You: ${userInput}`);
  console.log(`Roast Bot: ${roast}`);
}

// Test the bot with different inputs
chatWithBot("What's your opinion on my name?");
chatWithBot("Do you think I'm good at math?");
chatWithBot("Why am I single?");
chatWithBot("Can you give me some life advice?");
