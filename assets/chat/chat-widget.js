console.log("CHAT WIDGET DZIAŁA");

const root = document.getElementById("chat-widget-root");

// UI
root.innerHTML = `
<div class="chat-btn" id="chatBtn">💬</div>

<div class="chat-box hidden" id="chatBox">
    <div class="chat-header">Asystent</div>

    <div class="chat-messages" id="chatMessages"></div>

    <div class="chat-input">
        <input id="chatInput" placeholder="Napisz pytanie...">
        <button id="sendBtn">→</button>
    </div>
</div>
`;

const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const messages = document.getElementById("chatMessages");
const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

// open / close chat
chatBtn.onclick = () => {
    chatBox.classList.toggle("hidden");
};

// helper do wiadomości
function addMsg(text, type) {
    const div = document.createElement("div");
    div.textContent = text;

    div.style.margin = "5px 0";
    div.style.padding = "8px";
    div.style.borderRadius = "10px";
    div.style.maxWidth = "80%";
    div.style.wordBreak = "break-word";

    if (type === "user") {
        div.style.background = "#2d7cbe";
        div.style.color = "white";
        div.style.marginLeft = "auto";
    } else {
        div.style.background = "#eee";
        div.style.marginRight = "auto";
    }

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

// wysyłanie do AI
async function send() {
    const text = input.value.trim();
    if (!text) return;

    addMsg(text, "user");
    input.value = "";

    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        });

        if (!res.ok) {
            throw new Error("HTTP error: " + res.status);
        }

        const data = await res.json();

        addMsg(data.reply || "Brak odpowiedzi AI", "bot");

    } catch (err) {
        console.error(err);
        addMsg("Błąd połączenia z AI 😕", "bot");
    }
}

// klik button
sendBtn.onclick = send;

// enter
input.addEventListener("keydown", e => {
    if (e.key === "Enter") send();
});