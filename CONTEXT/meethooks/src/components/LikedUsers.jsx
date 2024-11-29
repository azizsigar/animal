
import { useFavorites } from '../context/FavoritesContext';

const LikedUsers = () => {
  const { likedUsers, removeUserFromFavorites } = useFavorites();

  return (
    <div className="liked-users">
      <h3>Liked Users</h3>
      <ul>
        {likedUsers.map((user, index) => (
          <li key={index}>
            <img src={user.picture.medium} alt={user.name.first} />
            <p>{user.name.first} {user.name.last}</p>
            <button onClick={() => removeUserFromFavorites(user)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedUsers;
