
import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [likedUsers, setLikedUsers] = useState([]);

  const addUserToFavorites = (user) => {
    setLikedUsers((prevLikedUsers) => [...prevLikedUsers, user]);
  };

  const removeUserFromFavorites = (user) => {
    setLikedUsers((prevLikedUsers) =>
      prevLikedUsers.filter((likedUser) => likedUser.login.uuid !== user.login.uuid)
    );
  };

  return (
    <FavoritesContext.Provider value={{ likedUsers, addUserToFavorites, removeUserFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
