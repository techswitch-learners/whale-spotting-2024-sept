import { useContext } from "react"
import { LoginContext } from "../Components/LoginManager/LoginManager"

const Home = () => {
  const { roleType } = useContext(LoginContext)
  console.log(roleType)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
