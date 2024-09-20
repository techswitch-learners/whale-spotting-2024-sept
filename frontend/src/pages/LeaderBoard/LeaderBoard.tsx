import "./LeaderBoard.scss"
import { useContext, useState } from "react"
import { FetchLeaderBoard, LeaderBoardTable } from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"

export function LeaderBoard(): JSX.Element {
  const { jwt } = useContext(LoginContext)
  const [usersLeaderBoard, setUsersLeaderBoard] = useState<LeaderBoardTable | null>(null)

  const logo = require("../../images/Whale3logo.png")
  const [error, setError] = useState("")

  if (usersLeaderBoard === null) {
    FetchLeaderBoard(jwt)
      .then((response) => setUsersLeaderBoard(response.result))
      .catch((err) => setError(err.message))
  }

  if (error) {
    return <div className="px-4">Unable to get Leaderboard data</div>
  }

  return (
    <div>
      <h1 className="title pt-4 pb-3">Leaderboard</h1>
      <table>
        <tr>
          <th>Username</th>
          <th>Total Points Earned</th>
          <th>Rank Order</th>
        </tr>
        {usersLeaderBoard &&
          usersLeaderBoard?.userLeaderBoard.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.totalPointsEarned}</td>
              {index === 0 && user.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 1 && user.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 2 && user.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 0 && user.totalPointsEarned === 0 && <td></td>}
              {index === 1 && user.totalPointsEarned === 0 && <td></td>}
              {index === 2 && user.totalPointsEarned === 0 && <td></td>}
              {index > 2 && <td> </td>}
            </tr>
          ))}
      </table>
    </div>
  )
}
