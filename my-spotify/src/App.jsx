import React from "react";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Home from "./components/home.jsx";

export default function App(){

  return(
    <div className="bg-black  h-screen ">
      <Navbar/>
      <div className="h-[90%] flex">
      <Sidebar/>
      <div className=" flex-1 overflow-y-auto">
      <Home/>
      </div>
      </div>
    </div>
  )
}