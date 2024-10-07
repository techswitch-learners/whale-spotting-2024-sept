import "./Home.scss"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  const logo = require("./../../images/Whale3logo.png")

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
      <div className="description">
        <p>
          Welcome to Whale Whale Whale — your one-stop platform for tracking, sharing, and exploring the incredible
          world of cetaceans!
        </p>
        <p className="long-para">
          Create an account to log your sightings, from playful dolphins to majestic whales, and connect with a
          community of marine enthusiasts. Discover detailed information on various species, browse through
          user-submitted sightings around the world, and contribute to building a global picture of these magnificent
          creatures.
        </p>
        <p>Dive in and help us celebrate and protect our ocean giants!</p>
      </div>
    </>
  )
}

export default Home
