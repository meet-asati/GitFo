import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import NavBar from "./components/Navbar";

function App() {

  return (
    <div className="flex flex-col justify-center bg-[#181818] h-screen">
      <div className="h-screen mx-48 my-10">
        <NavBar />
      </div>
    </div>
  )
}

export default App
