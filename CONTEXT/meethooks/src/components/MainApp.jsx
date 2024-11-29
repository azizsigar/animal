import { useEffect, useState } from "react";
import LikedUsers from "./LikedUsers";
import UserCard from "./UserCard";
import { useFavorites } from "../context/FavoritesContext";
import axios from "axios";

function MainApp() {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const { addUserToFavorites } = useFavorites();

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(response => {
        setUsers(response.data.results); // Set the users data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLike = () => {
    if (users[currentUserIndex]) {
      addUserToFavorites(users[currentUserIndex]); // Add the user to liked users
    }
    nextUser(); // Go to the next user
  };

  const handleDislike = () => {
    nextUser(); // Go to the next user
  };

  const nextUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length); // Loop back to the first user
  };

  return (
    <div className="App">
      {users.length > 0 && users[currentUserIndex] ? (
        <UserCard
          user={users[currentUserIndex]}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ) : (
        <p>Loading...</p>
      )}
      
      <LikedUsers />
    </div>
  );
}
export default MainApp;