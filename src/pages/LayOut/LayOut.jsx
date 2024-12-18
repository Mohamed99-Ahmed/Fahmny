import React from "react";
import NavBar from "../../compnents/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../compnents/Footer/Footer";

export default function LayOut() {
  return (
    <>
    {/* LayOut of the website (navbar + outlet(children)  + Footer) */}
      <NavBar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="mt-[68px]  py-10 flex-grow relative ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
