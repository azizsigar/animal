

const UserCard = ({ user, onLike, onDislike }) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt="User" />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>{user.email}</p>
      <div className="buttons">
        <button onClick={onDislike}>Dislike</button>
        <button onClick={onLike}>Like</button>
      </div>
    </div>
  );
};

export default UserCard;
