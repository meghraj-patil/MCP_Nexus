import { useEffect, useRef, useState } from "react";
import "../App.css";

const seed = [
{
id: 1,
from: "bot",
text: "Hey there — I'm Nexus. Ask me about any shipment."
},
{
id: 2,
from: "user",
text: "Where is order #DV-48211?"
},
{
id: 3,
from: "bot",
text:
"Order DV-48211 is in transit through Rotterdam hub."
}
];

export default function ChatWidget() {
const [messages, setMessages] = useState(seed);
const [input, setInput] = useState("");
const scrollRef = useRef(null);

useEffect(() => {
scrollRef.current?.scrollTo({
top: scrollRef.current.scrollHeight,
behavior: "smooth"
});
}, [messages]);

const send = (e) => {
e.preventDefault();


if (!input.trim()) return;

const id = Date.now();

setMessages([
  ...messages,
  {
    id,
    from: "user",
    text: input
  }
]);

setInput("");

setTimeout(() => {
  setMessages((prev) => [
    ...prev,
    {
      id: id + 1,
      from: "bot",
      text: "Scanning network..."
    }
  ]);
}, 700);


};

return ( 
<div className="chat-card">

```
  <div className="chat-header">
    <div className="avatar">N</div>

    <div>
      <h3>Ask MCP Nexus</h3>
      <p>● Online</p>
    </div>
  </div>

  <div
    className="messages"
    ref={scrollRef}
  >
    {messages.map((m) => (
      <div
        key={m.id}
        className={
          m.from === "bot"
            ? "bot-message"
            : "user-message"
        }
      >
        {m.text}
      </div>
    ))}
  </div>

  <form
    onSubmit={send}
    className="chat-form"
  >
    <input
      value={input}
      onChange={(e) =>
        setInput(e.target.value)
      }
      placeholder="Ask me..."
    />

    <button>
      →
    </button>
  </form>

</div>

);
}
