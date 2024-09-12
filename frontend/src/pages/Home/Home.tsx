import "./Home.scss"
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {

  const logo = require("./../../images/Whale3logo.png");

  const navigate = useNavigate()

  const handleClick = (event: { currentTarget: { id: string; }; }) => {
    const buttonId = event.currentTarget.id;
    switch (buttonId) {
      case "register-sighting-button":
        navigate("/");
        break;
      case "explore-button":
        navigate("/explore");
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="background-container">
        <div className="logo">
          <img src={logo} alt="Whale Whale Whale logo" width="200" />
        </div>
        <div className="top-buttons">
          <button id="register-sighting-button" data-testid="register-sighting-button" className="btn btn-primary btn-lg" style={{ width: "30vw", height: "8vh", margin: "10px" }} onClick={handleClick}>
            Submit
          </button>
          <button id="explore-button" data-testid="explore-button" className="btn btn-primary btn-lg" style={{ width: "30vw", height: "8vh", margin: "10px" }} onClick={handleClick}>
            Explore
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
