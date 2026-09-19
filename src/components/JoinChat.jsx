import { useState } from "react";

function JoinChat({ onJoin }) {

  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !groupName.trim()) {
      return;
    }

    onJoin(
      username.trim(),
      groupName.trim()
    );
  };

  return (
    <div className="join-page">

      <div className="join-card">

        <div className="chat-icon">
          💬
        </div>

        <h1>Join Chat</h1>

        <p className="join-subtitle">
          Enter your details to join a group
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>
              Group Name
            </label>

            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) =>
                setGroupName(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="join-button"
          >
            Join Group
            <span>→</span>
          </button>

        </form>

      </div>

    </div>
  );
}

export default JoinChat;