import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  const users = [
    { username: "john123", name: "John Doe", email: "john@gmail.com" },
    { username: "anna_01", name: "Anna Smith", email: "anna@gmail.com" },
  ];

  const user = users.find((u) => u.username === username);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default Profile;
