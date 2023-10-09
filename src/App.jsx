import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setAllUsers(json));
  }, []);

  return (
    <>
      <h1>All Users</h1>
      {allUsers.length > 0 ? (
        <>
          {allUsers.map((el) => (
            <h1 key={el.id}>{el.username}</h1>
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
