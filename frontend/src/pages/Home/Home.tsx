import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {

  const navigate = useNavigate()

  const handleClick = (event: { currentTarget: { id: string; }; }) => {
    const buttonId = event.currentTarget.id;
    switch (buttonId)
    {
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
      <img id="homepage-top-img" src="https://hips.hearstapps.com/hmg-prod/images/breaching-humpback-whale-cabo-san-lucas-baja-california-1531325454.jpg" />
        <button id="register-sighting-button" data-testid="register-sighting-button" className="btn btn-outline-success px-2" style={{ width: "200px", margin: "5px" }} onClick={handleClick}>
          Register a Sighting
        </button>
        <button id="explore-button" data-testid="explore-button" className="btn btn-outline-success px-2" style={{ width: "200px", margin: "5px" }} onClick={handleClick}>
          Explore
        </button>
    </>
  )
}

export default Home
