import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginButton = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <p>You are logged in!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
};

export default LoginButton;
