function MessageList({
  messages,
  currentUser,
}) {

  if (messages.length === 0) {
    return (
      <div className="message-list empty-messages">

        <div className="empty-message-icon">
          💬
        </div>

        <h3>
          No messages yet
        </h3>

        <p>
          Be the first person to send a message.
        </p>

      </div>
    );
  }

  return (
    <div className="message-list">

      {messages.map((message) => {

        const isMine =
          message.username === currentUser;

        return (
          <div
            key={message.id}
            className={`message-row ${
              isMine ? "mine" : ""
            }`}
          >

            {!isMine && (
              <div className="message-avatar">
                {message.username
                  .charAt(0)
                  .toUpperCase()}
              </div>
            )}

            <div
              className={`message-bubble ${
                isMine
                  ? "my-bubble"
                  : "other-bubble"
              }`}
            >

              {!isMine && (
                <strong>
                  {message.username}
                </strong>
              )}

              <p>
                {message.text}
              </p>

              <div className="message-meta">

                <span>
                  {message.time}
                </span>

                {isMine && (
                  <span className="checks">
                    ✓✓
                  </span>
                )}

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default MessageList;