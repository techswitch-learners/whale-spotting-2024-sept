import "./Home.scss"
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  
  const logo = require("./../../images/Whale3logo.png");

  // const navigate = useNavigate()

  // const handleClick = (event: { currentTarget: { id: string; }; }) => {
  //   const buttonId = event.currentTarget.id;
  //   switch (buttonId) {
  //     case "submit-button":
  //       navigate("/addsighting");
  //       break;
  //     case "explore-button":
  //       navigate("/explore");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <div data-testid="background-container" className="background-container">
        <div className="logo">
          <img src={logo} alt="Whale Whale Whale logo" width="200" />
        </div>
        <div className="top-buttons">
          <Link to="/addsighting">
          <button id="submit-button" data-testid="submit-button" className="btn btn-primary btn-lg custom-button">
            Submit
          </button>
          </Link>
          <Link to="/explore">
          <button id="explore-button" data-testid="explore-button" className="btn btn-primary btn-lg custom-button">
            Explore
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
