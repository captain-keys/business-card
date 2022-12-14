import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"
import './style.css'

export default function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Footer />
    </div>
  );
}

