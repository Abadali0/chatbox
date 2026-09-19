import { useState } from "react";

import JoinChat from "./components/JoinChat";
import ChatRoom from "./components/ChatRoom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleJoin = (username, groupName) => {
    setUser({
      username,
      groupName,
    });
  };

  const handleLeave = () => {
    setUser(null);
  };

  return (
    <div className="app">

      {!user ? (
        <JoinChat onJoin={handleJoin} />
      ) : (
        <ChatRoom
          user={user}
          onLeave={handleLeave}
        />
      )}

    </div>
  );
}

export default App;