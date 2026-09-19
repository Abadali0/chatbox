import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import UserSidebar from "./UserSidebar";

function ChatRoom({ user, onLeave }) {

  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState([
    user.username,
  ]);

  const channelRef = useRef(null);

  useEffect(() => {

    const channelName =
      `chat-room-${user.groupName}`;

    const channel =
      new BroadcastChannel(channelName);

    channelRef.current = channel;

    const handleMessage = (event) => {

      const data = event.data;

      if (data.type === "MESSAGE") {

        setMessages((previous) => [
          ...previous,
          data.message,
        ]);

      }

      if (data.type === "USER_JOINED") {

        setUsers((previous) => {

          if (
            previous.includes(data.username)
          ) {
            return previous;
          }

          return [
            ...previous,
            data.username,
          ];
        });

      }

    };

    channel.addEventListener(
      "message",
      handleMessage
    );

    channel.postMessage({
      type: "USER_JOINED",
      username: user.username,
    });

    return () => {
      channel.close();
    };

  }, [user]);

  const sendMessage = (text) => {

    const message = {
      id: Date.now(),
      username: user.username,
      text,
      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
    };

    setMessages((previous) => [
      ...previous,
      message,
    ]);

    channelRef.current?.postMessage({
      type: "MESSAGE",
      message,
    });
  };

  return (
    <div className="chat-page">

      <UserSidebar
        users={users}
        currentUser={user.username}
        onLeave={onLeave}
      />

      <div className="chat-main">

        <ChatHeader
          groupName={user.groupName}
          usersCount={users.length}
        />

        <MessageList
          messages={messages}
          currentUser={user.username}
        />

        <MessageInput
          onSend={sendMessage}
        />

      </div>

    </div>
  );
}

export default ChatRoom;