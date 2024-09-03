import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
