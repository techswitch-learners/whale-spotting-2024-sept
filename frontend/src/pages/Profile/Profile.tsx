import { useContext, useEffect, useState } from "react"
import { fetchUserProfile, User } from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"

export function Profile(): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const loginContext = useContext(LoginContext)

  useEffect(() => {
    fetchUserProfile(loginContext.jwt).then((response) => setUser(response))
  }, [loginContext.jwt])

  if (!user) {
    return <section>Loading...</section>
  }

  return (
    <div>
      <div className="username">Username: {user.username}</div>
      <div className="first-name">First name: {user.firstName}</div>
      <div className="last-name">Last name: {user.lastName}</div>
      <div className="email">Email: {user.email}</div>
      <div className="points-earned">Points earned: {user.totalPointsEarned}</div>
      <div className="about-me">About me: {user.aboutMe}</div>
    </div>
  )
}
