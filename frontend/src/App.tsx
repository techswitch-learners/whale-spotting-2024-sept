import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import Header from "./Header/Header"
import Hamburger from "./Hamburger/Hamburger"
import Menu from "./Menu/Menu"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hamburger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
