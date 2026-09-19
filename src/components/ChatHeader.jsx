function ChatHeader({
  groupName,
  usersCount,
}) {
  return (
    <header className="chat-header">

      <div className="group-info">

        <div className="group-avatar">
          👥
        </div>

        <div>
          <h2>{groupName}</h2>

          <p>
            <span className="green-dot"></span>
            {usersCount} members online
          </p>
        </div>

      </div>

      <div className="header-buttons">

        <button title="Search">
          🔍
        </button>

        <button title="More">
          ⋮
        </button>

      </div>

    </header>
  );
}

export default ChatHeader;