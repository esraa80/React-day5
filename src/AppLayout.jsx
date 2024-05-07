import React from "react";
import Navbar from "./components/navBar";
import { Outlet } from "react-router-dom"; 

export default function AppLayout() {

  return (
    <>
      <Navbar />
      <div className="container m-5">
        <Outlet  />
      </div>
    </>
  );
}
