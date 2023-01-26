const { useEffect, useState } = require("react");

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="userList">
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
