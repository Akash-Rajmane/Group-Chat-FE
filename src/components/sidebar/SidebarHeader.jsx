import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const SidebarHeader = () => {
  const {logout} = useContext(AuthContext);

  return (
    <div className="h-[60px] bg-green_4">
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default SidebarHeader