function UserSidebar({
  users,
  currentUser,
  onLeave,
}) {
  return (
    <aside className="chat-sidebar">

      <div className="sidebar-brand">

        <div className="brand-icon">
          💬
        </div>

        <h2>ChatApp</h2>

      </div>

      <div className="sidebar-section">

        <div className="section-title">
          <span>ONLINE MEMBERS</span>

          <span className="member-count">
            {users.length}
          </span>
        </div>

        <div className="members">

          {users.map((username, index) => (

            <div
              className="member"
              key={`${username}-${index}`}
            >

              <div className="member-avatar">
                {username
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div className="member-info">

                <strong>
                  {username}
                  {username === currentUser &&
                    " (You)"}
                </strong>

                <span>
                  Online
                </span>

              </div>

              <div className="online-indicator"></div>

            </div>

          ))}

        </div>

      </div>

      <div className="sidebar-bottom">

        <button
          className="leave-button"
          onClick={onLeave}
        >
          <span>↪</span>
          Leave Group
        </button>

      </div>

    </aside>
  );
}

export default UserSidebar;