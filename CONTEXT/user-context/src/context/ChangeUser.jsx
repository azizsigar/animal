import { useContext } from "react";
import { UserContext } from "./UserContext"


function ChangeUser() {
    const {setUserName}=useContext(UserContext)
  return (
      <div>
          
          <button
          onClick={()=>setUserName("sigar")}>
              
              change username
          </button>
    </div>
  )
}

export default ChangeUser