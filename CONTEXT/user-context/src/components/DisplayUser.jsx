import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function DisplayUser() {
    const {userName}=useContext(UserContext)
  return (
      <div>{userName}</div>
  )
}
