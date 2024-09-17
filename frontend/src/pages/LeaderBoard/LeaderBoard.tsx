import "./LeaderBoard.scss"
import { useContext, useEffect, useState } from "react"
import { FetchLeaderBoard, LeaderBoardUsers } from "../../api/backendClient"
import { LoginContext } from "../../Components/LoginManager/LoginManager"

export function LeaderBoard(): JSX.Element {
  const { jwt } = useContext(LoginContext)
  const [leaderboardusers, setLeaderboardusers] = useState<LeaderBoardUsers | null>(null)
  const logo = require("../../images/Whale3logo.png")
  //const [error, setError] = useState("")

  //FetchLeaderBoard(jwt).then((response) => setLeaderboardusers(response.result)).catch( (err)=>setError(err.message) )

  /*   if(!error){
    throw new Error(error);
  } */

  useEffect(() => {
    FetchLeaderBoard(jwt).then((response) => setLeaderboardusers(response.result))
  }, [jwt])

  /*   console.log("before the leaderboarduser output")
  console.log(leaderboardusers);
  console.log("after the leaderboarduser output") */

  return (
    <div>
      <h1 className="title">Leaderboard</h1>
      <table>
        <tr>
          <th>Username</th>
          <th>Total Points Earned</th>
          <th>Rank Order</th>
        </tr>
        {leaderboardusers &&
          leaderboardusers?.userLeaderBoard.map((leaderboarduser, index) => (
            <tr key={index}>
              <td>{leaderboarduser.userName}</td>
              <td>{leaderboarduser.totalPointsEarned}</td>
              {index === 0 && leaderboarduser.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 1 && leaderboarduser.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 2 && leaderboarduser.totalPointsEarned > 0 && (
                <td>
                  <img src={logo} alt="Whale Whale Whale logo" width="50" />
                </td>
              )}
              {index === 0 && leaderboarduser.totalPointsEarned === 0 && <td></td>}
              {index === 1 && leaderboarduser.totalPointsEarned === 0 && <td></td>}
              {index === 2 && leaderboarduser.totalPointsEarned === 0 && <td></td>}
              {index > 2 && <td> </td>}
            </tr>
          ))}
      </table>
    </div>
  )
}
