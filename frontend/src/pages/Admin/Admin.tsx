import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Components/LoginManager/LoginManager"
import { fetchUnapprovedSightings, Sightings } from "../../api/backendClient"

const Admin = () => {
  const loginContext = useContext(LoginContext)
  const [sightings, setSightings] = useState<Sightings | null>(null)

  useEffect(() => {
    fetchUnapprovedSightings(loginContext.jwt).then((response) => setSightings(response))
  }, [loginContext.jwt])

  console.log(sightings)

  if (loginContext.roleType === "Admin") {
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
