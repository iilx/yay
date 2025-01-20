function generateRoast() {
  const name = document.getElementById('name').value.trim();
  const hobby = document.getElementById('hobby').value.trim();
  const roastOutput = document.getElementById('roastOutput');

  if (!name || !hobby) {
    roastOutput.value = 'Please enter both your name and favorite hobby.';
    return;
  }

  const roasts = [
    `${name}, spending time on ${hobby}? No wonder you're still single.`,
    `I've seen rocks with more interesting hobbies than your ${hobby}, ${name}.`,
    `${name}, if ${hobby} is the highlight of your day, I feel sorry for you.`,
    `Engaging in ${hobby} doesn't make you special, ${name}. It makes you boring.`,
    `${name}, calling ${hobby} a hobby is an insult to actual hobbies.`,
    `You must be the only person who thinks ${hobby} is worth bragging about, ${name}.`,
    `${name}, if ${hobby} is your passion, it's time to find a new one.`,
    `I've met toddlers with more exciting interests than your ${hobby}, ${name}.`,
    `${name}, dedicating time to ${hobby} is a waste of everyone's time.`,
    `If ${hobby} is what you bring to the table, ${name}, I'd rather eat alone.`
  ];

  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  roastOutput.value = randomRoast;
}
