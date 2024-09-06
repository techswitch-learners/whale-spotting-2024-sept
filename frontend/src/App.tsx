import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import { CreateUser } from "./pages/CreateUser"
import Header from "./Components/Header/Header"
import Login from "./pages/Login/Login"
import { LoginManager } from "./Components/LoginManager/LoginManager"

function App() {
  return (
    <Router>
      <Header />
      <LoginManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
        </Routes>
      </LoginManager>
    </Router>
  )
}

export default App
