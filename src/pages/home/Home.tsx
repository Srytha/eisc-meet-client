import React, { useEffect, useState } from "react";
import { socket } from "../../sockets/socketManager";
import useAuthStore from "../../stores/useAuthStore";

const Home: React.FC = () => {
  const { user } = useAuthStore();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  useEffect(() => {
    if (!user) return;
    socket.emit("newUser", user.email ?? "");

    socket.on("receiveMessage", (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [user]);

  const handleSend = () => {
    if (!message.trim() || !user) return;
    const msgData = { sender: user.email ?? "Anon", text: message };
    socket.emit("sendMessage", msgData);
    setMessages(prev => [...prev, msgData]);
    setMessage("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Chat en tiempo realll</h1>

      <div className="border rounded p-2 h-64 overflow-y-auto bg-white">
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-1 flex-1 rounded"
          placeholder="Escribe un mensaje..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Home;
