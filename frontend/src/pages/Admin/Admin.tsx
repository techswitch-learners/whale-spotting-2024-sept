import { useContext } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"

const Admin = () => {
  const { roleType } = useContext(LoginContext)

  if (roleType === "Admin") {
    return (
      <div>
        <h1 data-testid="adminTitle">Admin Page</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
      </div>
    )
  }
}

export default Admin
