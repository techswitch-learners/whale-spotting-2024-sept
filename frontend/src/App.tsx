import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import Header from "./Components/Header/Header"
import Login from "./pages/Login/Login"
import { LoginContext, LoginManager } from "./Components/LoginManager/LoginManager"

function App() {
  const loginContext = useContext(LoginContext)

  if (!loginContext.isLoggedIn) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Header />
      <LoginManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LoginManager>
    </BrowserRouter>
  )
}

export default App
