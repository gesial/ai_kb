const knowledgeBase = {
  "hello": "Hi there! How can I help you today?",
  "what is your name": "I'm a simple AI bot built with JavaScript.",
  "how does this work": "I match your question with my local knowledge base.",
  "who created you": "I was created by a developer using HTML, CSS, and JS.",
  "bye": "Goodbye! Have a great day!"
};

const input = document.getElementById("input");
const messages = document.getElementById("messages");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userInput = input.value.trim();
    if (userInput) {
      addMessage("user", userInput);
      respond(userInput);
      input.value = "";
    }
  }
});

function addMessage(type, text) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function respond(userText) {
  const lower = userText.toLowerCase();
  const answer = knowledgeBase[lower] || "Sorry, I don't know the answer to that.";
  setTimeout(() => addMessage("bot", answer), 500);
}
