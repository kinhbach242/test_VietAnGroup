import React from "react";
import Nodata from "../components/Nodata";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className="home container">
        <Sidebar />
        <Nodata />
      </div>
    </>
  );
}

export default Home;
