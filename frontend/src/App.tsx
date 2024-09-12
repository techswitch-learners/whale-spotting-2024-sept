import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import { CreateUser } from "./pages/CreateUser"
import Header from "./Header/Header"
import Hamburger from "./Hamburger/Hamburger"
import Login from "./pages/Login/Login"
import { LoginManager } from "./Components/LoginManager/LoginManager"
import { AddSighting } from "./pages/AddSighting"

function App() {
  return (
    <BrowserRouter>
      <LoginManager>
        <Header />
        <Hamburger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route path="/addsighting" element={<AddSighting/>} />
      </Routes>
      </LoginManager>
    </BrowserRouter>
  )
}

export default App
