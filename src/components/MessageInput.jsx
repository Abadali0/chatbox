import { useState } from "react";

function MessageInput({ onSend }) {

  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    onSend(message.trim());

    setMessage("");
  };

  const handleKeyDown = (e) => {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSubmit(e);
    }
  };

  return (
    <div className="message-input-area">

      <form
        className="message-form"
        onSubmit={handleSubmit}
      >

        <button
          type="button"
          className="input-action"
        >
          😊
        </button>

        <button
          type="button"
          className="input-action"
        >
          📎
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button
          type="submit"
          className="send-button"
        >
          <span>➤</span>
        </button>

      </form>

      <p className="input-hint">
        Press Enter to send
      </p>

    </div>
  );
}

export default MessageInput;