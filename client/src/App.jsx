import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {

  return (
    <div className="flex flex-col justify-center bg-[#181818] h-screen">
      <div className="flex flex-col gap-20 h-screen mx-48 my-10">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
